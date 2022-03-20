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
import { ArwesThemeProvider, Blockquote, StylesBaseline } from "@arwes/core";
import { AnimatorGeneralProvider } from "@arwes/animation";
import { setUserPermissionType } from "./utils/auth";
import Auth from "./routes/auth";
import { getMembers } from "./gateway/notions";
import { authenticator } from "./utils/auth.server";

import { CheckoutComponent } from "./component/CheckoutComponent";

const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';
const FONT_FAMILY_CODE = '"Source Code Pro", monospace';

const animatorGeneral = {
    duration: { enter: 200, exit: 200, stagger: 30 },
};

export const meta: MetaFunction = () => {
    return {
        title: "Portail intergalactique",
        description: "Interface de recherche intergalactique TiPi",
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
    const session = await authenticator.isAuthenticated(request);
    const members = await getMembers();
    return {
        members,
        session,
        ENV: {
            WEBSITE_URL: process.env.WEBSITE_URL,
            STRIPE_PUBLIC_KEY: process.env.STRIPE_PUBLIC_KEY,
        },
    };
};

export default function App() {
    const { members, session, ENV } = useLoaderData();
    let userPermissionType = setUserPermissionType(session, members);

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
                        {userPermissionType === "NONE" && <Auth />}

                        {userPermissionType === "INVALID_MEMBER" && (
                            <>
                                <Blockquote palette="error">
                                    {`${session.name} ne correspond à aucun nom figurant sur notre liste de mercenaires. Veuillez nous excuser pour la gêne occasionnée.`}
                                </Blockquote>
                            </>
                        )}

                        {userPermissionType === "MEMBER_NO_PAID" && (
                            <CheckoutComponent
                                session={session}
                            ></CheckoutComponent>
                        )}

                        {userPermissionType === "MEMBER_PAID" && (
                            <Outlet context={{ members, session }} />
                        )}
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
