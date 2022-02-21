import { json } from "remix";
import { Client } from "@notionhq/client";

const notion = new Client({
    auth: "secret_LBsUIf4CYt9PNHqif7YzXa1QU3ECvgcI4WyirWAdX7t",
});

const databaseId = "7a30bf647c9f4925baacc3d6721b4fb3";

export default async () => {
    const res = await notion.databases.query({
        database_id: databaseId,
        sorts: [
            {
                property: "Score",
                direction: "descending",
            },
            {
                property: "firstName",
                direction: "ascending",
            },
        ],
    });
    return json(res.results);
};