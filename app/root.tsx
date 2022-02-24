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
import { useState, useEffect } from "react";
import { supabase } from "./utils/supabaseClient";
import { Session } from "@supabase/supabase-js";
import Auth from "./routes/auth";
import { getMembers, setFacebookId } from "./gateway/notions";

const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';
const FONT_FAMILY_CODE = '"Source Code Pro", monospace';

const animatorGeneral = {
    duration: { enter: 200, exit: 200, stagger: 30 },
};

export const meta: MetaFunction = () => {
    return { title: "Portail intergalactique" };
};

export function links() {
    return [
        {
            rel: "stylesheet",
            href: styles,
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
            await setFacebookId(
                "coucou",
                "eae43aff-6bcf-487c-8b74-fd6122792dce"
            );
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
                            <Blockquote palette="secondary">
                                {`${session?.user?.user_metadata.name} figure bien sur notre liste des mercenaires mais les frais n'ont pas encore été acquitté.`}
                                <br /> <br />
                                Pour ce faire, veuillez envoyer 80$ à l'adresse
                                interrac suivante: alexis.anzieu@gmail.com en
                                indiquant votre nom.
                            </Blockquote>
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
