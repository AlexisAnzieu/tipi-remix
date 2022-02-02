import { useLoaderData } from "remix";
import { Client } from "@notionhq/client";
import { ArwesThemeProvider, StylesBaseline, Table } from "@arwes/core";
const notion = new Client({
    auth: "secret_LBsUIf4CYt9PNHqif7YzXa1QU3ECvgcI4WyirWAdX7t",
});

const databaseId = "7a30bf647c9f4925baacc3d6721b4fb3";

const headers = [
    { id: "a", data: "Nom" },
    { id: "b", data: "Score" },
];

const columnWidths = ["50%", "50%"];

export const loader = async () => {
    const res = await notion.databases.query({
        database_id: databaseId,
        sorts: [
            {
                property: "score",
                direction: "descending",
            },
            {
                property: "Nom",
                direction: "ascending",
            },
        ],
    });
    console.log((res.results[0] as any).properties.score);
    return res.results;
};

export default function Members() {
    const data = useLoaderData();
    const dataset = data.map((_: any, index: any) => ({
        id: index,
        columns: [
            { id: "p", data: _.properties.Nom.title[0].plain_text },
            { id: "p", data: _.properties.score.number },
        ],
    }));
    return (
        <ArwesThemeProvider>
            <StylesBaseline />
            <Table
                animator={{ animate: false }}
                headers={headers}
                dataset={dataset}
                columnWidths={columnWidths}
            />
        </ArwesThemeProvider>
    );
}
