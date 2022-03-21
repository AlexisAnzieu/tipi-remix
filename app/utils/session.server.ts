import { createCookieSessionStorage } from "remix";

// export the whole sessionStorage object
export let sessionStorage = createCookieSessionStorage({
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7 * 52, // 1 year
        name: "tipisession", // use any name you want here
        sameSite: "lax", // this helps with CSRF
        path: "/", // remember to add this so the cookie will work in all routes
        httpOnly: true, // for security reasons, make this cookie http only
        secure: process.env.NODE_ENV === "production", // enable this in prod only
    },
});

// you can also export the methods individually for your own usage
export let { getSession, commitSession, destroySession } = sessionStorage;