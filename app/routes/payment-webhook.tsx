import { ActionFunction, json } from "remix";
import { bodyParser } from "remix-utils";
import { directus } from "~/utils/directus";

export const action: ActionFunction = async ({ request }: any) => {
    const event = JSON.parse(await bodyParser.toString(request));
    let user;
    if (event.type === "payment_intent.succeeded") {
        const object = event.data.object;
        user = await directus
            .items("tipi_users")
            .updateOne(object.metadata.facebook_id, {
                has_paid: true,
                email: object.receipt_email,
            });
    }

    return json(user);
};
