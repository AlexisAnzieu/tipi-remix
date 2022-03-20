import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Blockquote } from "@arwes/core";
import { useState, useEffect } from "react";
import { CheckoutFormComponent } from "./CheckoutFormComponent";

export const CheckoutComponent = ({ session }: any): JSX.Element => {
    const [clientSecret, setClientSecret] = useState("");
    const appearance = {
        theme: "night",
    };
    const options = {
        clientSecret,
        appearance,
    };

    useEffect(() => {
        fetch("/create-payment-intent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);
    return (
        <>
            <Blockquote palette="primary">
                {`${session.name} figure bien sur notre liste des mercenaires mais les frais n'ont pas encore été acquittés.`}
                <br /> <br />
                Pour ce faire, veuillez payer les 80$ de frais d'inscription,
                nos équipes se chargeront de vérifier le paiement avant de vous
                valider l'accès au portail galactique.
            </Blockquote>
            <div className="App">
                {clientSecret && (
                    <Elements
                        options={options}
                        stripe={loadStripe(
                            (window as any).ENV.STRIPE_PUBLIC_KEY
                        )}
                    >
                        <CheckoutFormComponent session={session} />
                    </Elements>
                )}
            </div>
        </>
    );
};
