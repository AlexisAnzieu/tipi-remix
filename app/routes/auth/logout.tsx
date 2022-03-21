import { LoaderFunction } from "remix";
import { authenticator } from "../../utils/auth.server";

export let loader: LoaderFunction = async ({ request }) => {
    await authenticator.logout(request, { redirectTo: "/" });
};
