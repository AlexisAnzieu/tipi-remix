import { Authenticator } from "remix-auth";
import { FacebookStrategy, SocialsProvider } from "remix-auth-socials";
import { sessionStorage } from "~/utils/session.server";
import "dotenv/config";

// Create an instance of the authenticator, pass a generic <User> type which the
// strategies will return (this will be stored in the session)
export let authenticator = new Authenticator(sessionStorage, {
    sessionKey: "_session",
});

authenticator.use(
    new FacebookStrategy(
        {
            clientID: "940562629782152",
            clientSecret: "2e88f63efb2518a2c014a410648ecc90",
            callbackURL: `${process.env.WEBSITE_URL}/auth/${SocialsProvider.FACEBOOK}/callback`,
            extraProfileFields: ["picture.width(1000)"] as any,
        },
        async ({ profile }) => {
            console.log(profile);
            return profile;
        }
    )
);
