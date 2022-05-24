import { createCookieSessionStorage } from "remix";
import "dotenv/config";

// export the whole sessionStorage object
export let sessionStorage = createCookieSessionStorage({
    cookie: {
        name: "_session", // use any name you want here
        sameSite: "lax", // this helps with CSRF
        path: "/", // remember to add this so the cookie will work in all routes
        secure: process.env.NODE_ENV === "production", // enable this in prod only
        secrets: ["thisisasecret"],
        expires: new Date(Date.now() + 48 * 3600 * 1000)
    },
});

// you can also export the methods individually for your own usage
export let { getSession, commitSession, destroySession } = sessionStorage;