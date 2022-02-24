import { Link, useOutletContext } from "remix";
import { Button, Table } from "@arwes/core";

export default function Members() {
    const { members } = useOutletContext<any>();

    const cleanData = members.map((e: any) => ({
        team: e.properties.Team.select.name,
        score: e.properties.Score.number || 0,
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

    const datasetMercenaires = members.map((e: any, index: any) => {
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
                { id: "k", data: e.properties.Score.number || 0 },
            ],
        };
    });

    return (
        <>
            <Link to="/">
                <Button palette="primary">Retour au portail</Button>
            </Link>
            <br />
            <br />
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
    );
}
