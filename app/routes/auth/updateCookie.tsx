import { LoaderFunction, redirect } from "remix";
import { getSession, commitSession } from "./../../utils/session.server";

export let loader: LoaderFunction = async ({ request, params }) => {
    const session = await getSession(request.headers.get("Cookie"));
    const newSession = {
        ...session,
        data: {
            ...session.data,
            _session: {
                ...session.data._session,
                has_paid: true,
            },
        },
    };

    return redirect("/", {
        headers: {
            "Set-Cookie": await commitSession(newSession),
        },
    });
};
