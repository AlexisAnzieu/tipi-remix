import { json } from "@remix-run/node"; // or cloudflare/deno

export const loader = async () => {
    console.log("coucou");
    return json({ ok: true });
};
