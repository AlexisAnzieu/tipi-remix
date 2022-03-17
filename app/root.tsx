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
    Button,
    StylesBaseline,
} from "@arwes/core";
import { AnimatorGeneralProvider } from "@arwes/animation";
import { setUserPermissionType } from "./utils/auth";
import { useState, useEffect } from "react";
import { supabase } from "./utils/supabaseClient";
import { Session } from "@supabase/supabase-js";
import Auth from "./routes/auth";
import { getMembers } from "./gateway/notions";

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

export const loader = async () => {
    const members = await getMembers();
    return { members };
};

export default function App() {
    const [session, setSession] = useState<Session | null>(null);
    const { members } = useLoaderData();
    let userPermissionType = setUserPermissionType(session, members);

    useEffect(() => {
        setSession(supabase.auth.session() as any);
        supabase.auth.onAuthStateChange(async (_event, s: Session | null) => {
            setSession(s);
            userPermissionType = setUserPermissionType(s, members);
        });
    }, []);

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
                                    {`${session?.user?.user_metadata.name} ne correspond à aucun nom figurant sur notre liste de mercenaires. Veuillez nous excuser pour la gène occasionnée.`}
                                </Blockquote>
                            </>
                        )}

                        {userPermissionType === "MEMBER_NO_PAID" && (
                            <>
                                <Blockquote palette="secondary">
                                    {`${session?.user?.user_metadata.name} figure bien sur notre liste des mercenaires mais les frais n'ont pas encore été acquittés.`}
                                    <br /> <br />
                                    Pour ce faire, veuillez payer les 85$
                                    d'inscription, nos équipes se chargeront de
                                    vérifier le paiement avant de vous valider
                                    l'accès au portail galactique.
                                </Blockquote>
                                <a href="https://buy.stripe.com/test_00g179ePQfJR480288">
                                    <Button palette="secondary" active>
                                        Payer les frais d'inscription
                                    </Button>
                                </a>
                            </>
                        )}

                        {userPermissionType === "MEMBER_PAID" && (
                            <Outlet context={{ members, session }} />
                        )}
                    </AnimatorGeneralProvider>
                </ArwesThemeProvider>
                <ScrollRestoration />
                <Scripts />
                {process.env.NODE_ENV === "development" && <LiveReload />}
            </body>
        </html>
    );
}
