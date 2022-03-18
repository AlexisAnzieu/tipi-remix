import { ActionFunction, json } from "remix";
import { bodyParser } from "remix-utils";
import { directus } from "~/utils/directus";

export const action: ActionFunction = async ({ request }: any) => {
    const event = JSON.parse(await bodyParser.toString(request));
    let user;
    if (event.type === "payment_intent.succeeded") {
        const metadata = event.data.object.metadata;
        user = await directus
            .items("tipi_users")
            .updateOne(metadata.facebook_id, {
                has_paid: true,
            });
        console.log(user);
    }

    return json(user);
};
