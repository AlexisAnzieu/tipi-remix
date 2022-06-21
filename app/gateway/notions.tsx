import { Client } from "@notionhq/client/build/src";

const notion = new Client({
    auth: "secret_LBsUIf4CYt9PNHqif7YzXa1QU3ECvgcI4WyirWAdX7t",
});

const databaseId = "7a30bf647c9f4925baacc3d6721b4fb3";

export const getMembers = async () => {
    const res1 = await notion.databases.query({
        database_id: databaseId,
        sorts: [
            {
                property: "fullName",
                direction: "ascending",
            },
        ],
    });

    const res2 = await notion.databases.query({
        database_id: databaseId,
        start_cursor: res1.next_cursor as string,
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
    return [...res1.results, ...res2.results];
};
