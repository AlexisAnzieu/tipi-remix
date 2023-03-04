import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
} from "remix";
import type { MetaFunction } from "remix";
import styles from "~/style.css";
import {
    ArwesThemeProvider,
    Blockquote,
    StylesBaseline,
    Text,
} from "@arwes/core";
import { AnimatorGeneralProvider } from "@arwes/animation";
import { setUserPermissionType } from "./utils/auth";
import Auth from "./routes/auth";
import { authenticator } from "./utils/auth.server";

import { CheckoutComponent } from "./component/CheckoutComponent";
import { directus } from "./utils/directus";

const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';
const FONT_FAMILY_CODE = '"Source Code Pro", monospace';

const animatorGeneral = {
    duration: { enter: 200, exit: 200, stagger: 30 },
};

export const meta: MetaFunction = () => {
    return {
        title: "Portail intergalactique",
        description: "Interface de recherche intergalactique TiPi",
        "og:image": "./images/wallpaper.jpeg",
    };
};

export function links() {
    return [
        {
            rel: "stylesheet",
            href: styles,
        },
        {
            rel: "icon",
            href: "/favicon.png",
        },
    ];
}

export const loader = async ({ request }: any) => {
    const { data: directusUsers } = await directus
        .items("tipi_users")
        .readByQuery({
            limit: 200,
        });
    const session = await authenticator.isAuthenticated(request);
    console.log(session);
    return {
        session,
        directusUsers,
        ENV: {
            WEBSITE_URL: process.env.WEBSITE_URL,
            STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
        },
    };
};

export default function App() {
    const { session, ENV, directusUsers } = useLoaderData();
    let userPermissionType = setUserPermissionType(session);

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body>
                <ArwesThemeProvider>
                    <StylesBaseline
                        styles={{
                            "html, body": {
                                fontFamily: FONT_FAMILY_ROOT,
                                padding: "20px",
                            },
                            "code, pre": { fontFamily: FONT_FAMILY_CODE },
                        }}
                    />
                    <AnimatorGeneralProvider animator={animatorGeneral}>
                        <Outlet context={{ session, directusUsers }} />
                    </AnimatorGeneralProvider>
                </ArwesThemeProvider>
                <ScrollRestoration />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.ENV = ${JSON.stringify(ENV)}`,
                    }}
                />
                <Scripts />
                {process.env.NODE_ENV === "development" && <LiveReload />}
            </body>
        </html>
    );
}
