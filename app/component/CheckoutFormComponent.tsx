import {
    PaymentElement,
    useElements,
    useStripe,
} from "@stripe/react-stripe-js";
import { StripeError } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
export const CheckoutFormComponent = ({ session }: any): JSX.Element => {
    const stripe = useStripe();
    const elements = useElements();
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(window.location.search).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent?.status) {
                case "succeeded":
                    setMessage(
                        "Paiement effectué avec succès, bienvenue chez les mercenaires!"
                    );
                    break;
                case "processing":
                    setMessage("Paiement en cours, veuillez patienter...");
                    break;
                case "requires_payment_method":
                    setMessage(
                        "Le paiement a échoué, veuillez vérifier votre carte de crédit et réessayer."
                    );
                    break;
                default:
                    setMessage("Erreur inconnue, veuillez réessayer.");
                    break;
            }
        });
    }, [stripe]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!stripe || !elements || !email) {
            // Stripe.js has not yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        setIsLoading(true);

        const { error }: { error: StripeError } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Make sure to change this to your payment completion page
                return_url: `${
                    (window as any).ENV.WEBSITE_URL
                }/auth/updateCookie`,
                receipt_email: email,
                payment_method_data: {
                    billing_details: {
                        email: session.email,
                        name: session.name,
                    },
                },
            },
        });

        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error?.message || "");
        } else {
            setMessage("An unexpected error occured.");
        }

        setIsLoading(false);
    };

    return (
        <form id="payment-form" onSubmit={handleSubmit}>
            <PaymentElement id="payment-element" />
            <input
                id="payment_email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Entrez votre adresse email"
            />
            <br />
            <button
                className="stripe_button"
                disabled={isLoading || !stripe || !elements}
                id="submit"
            >
                <span id="button-text">
                    {isLoading ? (
                        <div className="spinner" id="spinner"></div>
                    ) : (
                        "Payer les frais d'inscription"
                    )}
                </span>
            </button>
            {/* Show any error or success messages */}
            {message && <div id="payment-message">{message}</div>}
        </form>
    );
};
