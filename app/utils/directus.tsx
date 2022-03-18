import { Directus } from "@directus/sdk";

export const directus = new Directus("https://cms.reve-s.net", {
    auth: {
        staticToken: "securetoken",
    },
});
