import { ActionFunction, json } from "remix";
import Stripe from "stripe";
import { authenticator } from "~/utils/auth.server";
import "dotenv/config";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2020-08-27",
});

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
