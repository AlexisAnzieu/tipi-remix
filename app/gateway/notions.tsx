import { Client } from "@notionhq/client/build/src";

const notion = new Client({
    auth: "secret_LBsUIf4CYt9PNHqif7YzXa1QU3ECvgcI4WyirWAdX7t",
});

const databaseId = "7a30bf647c9f4925baacc3d6721b4fb3";

export const getMembers = async () => {
    const res = await notion.databases.query({
        database_id: databaseId,
        sorts: [
            {
                property: "Score",
                direction: "descending",
            },
            {
                property: "fullName",
                direction: "ascending",
            },
        ],
    });
    return res.results;
};
