import { Link, useNavigate, useOutletContext } from "remix";
import { Button, Table } from "@arwes/core";

const filterPaidMembers = (members: any, users: any) => {
    return members.filter((row: any) => {
        const name = row.properties.fullName.title[0].plain_text;
        const user = users.find((u: any) => u.name === name);
        return user?.has_paid;
    });
};

export default function Members() {
    const { members, directusUsers } = useOutletContext<any>();
    const navigate = useNavigate();
    const paidMembers = filterPaidMembers(members, directusUsers);
    const extractedMembers = paidMembers.map(
        (row: any) => row.properties.fullName.title[0].plain_text
    );

    const cleanData = paidMembers.map((e: any) => ({
        team: e.properties.Team.select?.name,
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

    const datasetMercenaires = paidMembers.map((e: any, index: any) => {
        return {
            id: index,
            columns: [
                {
                    id: "i",
                    data: e.properties.fullName.title[0].plain_text,
                },
                { id: "j", data: e.properties.Team.select?.name || "Aucune" },
                { id: "k", data: e.properties.Score.number || 0 },
            ],
        };
    });

    const showProfile = (e: any) => {
        const id = e.target.outerText;
        if (extractedMembers.find((e: any) => e === id)) {
            navigate(`/profile/${id}`);
        }
    };

    return (
        <>
            <Link to="/">
                <Button palette="primary">Retour au portail</Button>
            </Link>
            <br />
            <br />
            {/* <h1>Équipes</h1>
            <Table
                animator={{ animate: false }}
                headers={[
                    { id: "e", data: "Équipe" },
                    { id: "d", data: "Score" },
                ]}
                dataset={datasetTeams}
                columnWidths={["50%", "50%"]}
            /> */}
            <h1>Mercenaires</h1>
            <div onClick={showProfile}>
                <Table
                    animator={{ animate: false }}
                    headers={[
                        { id: "a", data: "Nom" },
                        { id: "c", data: "Équipe" },
                        { id: "b", data: "Score" },
                    ]}
                    dataset={datasetMercenaires}
                    columnWidths={["40%", "35%", "25%"]}
                />
            </div>
        </>
    );
}
