import { ActionFunction, LoaderFunction, redirect } from "remix";
import { authenticator } from "~/utils/auth.server";

export let loader: LoaderFunction = () => redirect("/");

export let action: ActionFunction = ({ request, params }: any) => {
    return authenticator.authenticate(params.provider, request);
};
