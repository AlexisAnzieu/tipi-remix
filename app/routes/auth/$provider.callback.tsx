import { LoaderFunction } from "remix";
import { authenticator } from "~/utils/auth.server";

export let loader: LoaderFunction = ({ request, params }: any) => {
    return authenticator.authenticate(params.provider, request, {
        successRedirect: "/",
        failureRedirect: "/",
    });
};
