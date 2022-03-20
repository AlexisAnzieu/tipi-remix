import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Blockquote, Text } from "@arwes/core";
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
                <Text>
                    {`${session.name} figure bien sur notre liste des mercenaires mais les frais n'ont pas encore été acquittés. Pour ce faire, veuillez payer les 80$ de frais d'inscription.`}
                    <br /> <br />
                    En cas de problème,{" "}
                    <a target="_blank" href="https://m.me/alexisanzieu">
                        veuillez contacter l'administrateur système planétaire.
                    </a>
                </Text>
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
