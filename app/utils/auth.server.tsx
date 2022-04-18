import { Authenticator } from "remix-auth";
import {
    FacebookStrategy,
    GoogleStrategy,
    SocialsProvider,
} from "remix-auth-socials";
import { sessionStorage } from "~/utils/session.server";
import "dotenv/config";
import { directus } from "./directus";

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
        async ({ profile }: any) => {
            const data = {
                name: profile.displayName,
                email: profile?.emails?.[0].value,
                picture: profile?._json.picture?.data?.url,
            };
            try {
                const user = await directus.items("tipi_users").createOne({
                    ...data,
                    facebook_id: profile.id,
                });
                return user;
            } catch (error: any) {
                if (error.errors[0]?.extensions.code === "RECORD_NOT_UNIQUE") {
                    return directus
                        .items("tipi_users")
                        .updateOne(profile.id, data);
                }
                return data;
            }
        }
    )
);

authenticator.use(
    new GoogleStrategy(
        {
            clientID:
                "659982361332-u3l2af78do2jrlpm8mss6dkoj3j2enld.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL: `${process.env.WEBSITE_URL}/auth/${SocialsProvider.GOOGLE}/callback`,
        },
        async ({ profile }: any) => {
            const data = {
                name: profile.displayName,
                email: profile?.emails?.[0].value,
                picture: profile?._json.picture,
            };
            try {
                const user = await directus.items("tipi_users").createOne({
                    ...data,
                    facebook_id: profile.id,
                });
                return user;
            } catch (error: any) {
                if (error.errors[0]?.extensions.code === "RECORD_NOT_UNIQUE") {
                    return directus
                        .items("tipi_users")
                        .updateOne(profile.id, data);
                }
                return data;
            }
        }
    )
);
