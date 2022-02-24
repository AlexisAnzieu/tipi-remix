import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import styles from "~/style.css";
import { ArwesThemeProvider, StylesBaseline } from "@arwes/core";
import { AnimatorGeneralProvider } from "@arwes/animation";

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

export default function App() {
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
                {" "}
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
                        <Outlet />
                    </AnimatorGeneralProvider>
                </ArwesThemeProvider>
                <ScrollRestoration />
                <Scripts />
                {process.env.NODE_ENV === "development" && <LiveReload />}
            </body>
        </html>
    );
}
