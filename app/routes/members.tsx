import { useLoaderData } from "remix";
import { Client } from "@notionhq/client";
import { ArwesThemeProvider, StylesBaseline, Table } from "@arwes/core";

const notion = new Client({
    auth: "secret_LBsUIf4CYt9PNHqif7YzXa1QU3ECvgcI4WyirWAdX7t",
});

const databaseId = "7a30bf647c9f4925baacc3d6721b4fb3";

export const loader = async () => {
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
    return res.results;
};

export default function Members() {
    const data = useLoaderData();
    const cleanData = data.map((e: any) => ({
        team: e.properties.Team.select.name,
        score: e.properties.Score.number,
    }));

    const scoreByTeam = cleanData.reduce((acc: any, cur: any) => {
        if (acc[cur.team]) {
            acc[cur.team] += cur.score;
        } else {
            acc[cur.team] = cur.score;
        }
        return acc;
    }, {});

    const datasetTeams = Object.entries(scoreByTeam).map(
        (e: any, index: any) => ({
            id: index,
            columns: [
                { id: "g", data: e[0] },
                { id: "h", data: e[1] },
            ],
        })
    );

    const datasetMercenaires = data.map((e: any, index: any) => {
        return {
            id: index,
            columns: [
                {
                    id: "i",
                    data: `${e.properties.firstName.title[0].plain_text} ${
                        e.properties.lastName.rich_text[0]?.plain_text || ""
                    }`,
                },
                { id: "j", data: e.properties.Team.select.name },
                { id: "k", data: e.properties.Score.number },
            ],
        };
    });

    return (
        <ArwesThemeProvider>
            <StylesBaseline />
            <>
                <h1>Par équipes</h1>
                <Table
                    animator={{ animate: false }}
                    headers={[
                        { id: "e", data: "Équipe" },
                        { id: "d", data: "Score" },
                    ]}
                    dataset={datasetTeams}
                    columnWidths={["50%", "50%"]}
                />
                <h1>Par mercenaires</h1>
                <Table
                    animator={{ animate: false }}
                    headers={[
                        { id: "a", data: "Nom" },
                        { id: "c", data: "Équipe" },
                        { id: "b", data: "Score" },
                    ]}
                    dataset={datasetMercenaires}
                    columnWidths={["40%", "40%", "20%"]}
                />
            </>
        </ArwesThemeProvider>
    );
}
