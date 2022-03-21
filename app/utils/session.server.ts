import { createCookieSessionStorage } from "remix";

// export the whole sessionStorage object
export let sessionStorage = createCookieSessionStorage({
    cookie: {
        name: "_session", // use any name you want here
    },
});

// you can also export the methods individually for your own usage
export let { getSession, commitSession, destroySession } = sessionStorage;