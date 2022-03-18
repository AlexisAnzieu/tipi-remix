import { ActionFunction, json } from "remix";
import Stripe from "stripe";
import { authenticator } from "~/utils/auth.server";
const stripe = new Stripe(
    "sk_test_51KWpDdL9ejWL0apoU3qqUn6bSYW4q9PB88P8nWKltNSrYB5tAvZzqX6bVedBnu62qO7Sr5d2kdoLxN8fLBRl8JEq002p9JoYjE",
    {
        apiVersion: "2020-08-27",
    }
);

export const action: ActionFunction = async ({ request }) => {
    const user: any = await authenticator.isAuthenticated(request, {
        failureRedirect: "/",
    });

    const paymentIntent = await stripe.paymentIntents.create({
        amount: 8000,
        currency: "cad",
        automatic_payment_methods: {
            enabled: true,
        },
        metadata: {
            facebook_id: user.facebook_id,
        },
    });

    return json({
        clientSecret: paymentIntent.client_secret,
    });
};
