import { Link, useNavigate, useOutletContext } from "remix";
import { Button, FrameUnderline, Table } from "@arwes/core";

const filterPaidMembers = (users: any) =>
    users
        .filter((user: any) => user?.has_paid)
        .sort((user: any, b: any) => user.name.localeCompare(b.name));

export default function Members() {
    const { directusUsers } = useOutletContext<any>();
    const navigate = useNavigate();
    const paidMembers = filterPaidMembers(directusUsers);

    const cleanData = paidMembers.map((user: any) => ({
        team: user.team,
        score: user.score || 0,
    }));

    const scoreByTeam = cleanData.reduce((acc: any, cur: any) => {
        if (acc[cur.team]) {
            acc[cur.team] += cur.score;
        } else {
            acc[cur.team] = cur.score;
        }
        return acc;
    }, {});

    console.log(Object.entries(scoreByTeam));
    const datasetTeams = Object.entries(scoreByTeam)
        .sort((a: any, b: any) => b[1] - a[1])
        .map((e: any, index: any) => ({
            id: index,
            columns: [
                { id: "g", data: e[0] },
                { id: "h", data: e[1] },
            ],
        }));

    const datasetMercenaires = paidMembers.map((e: any, index: any) => {
        return {
            id: index,
            columns: [
                {
                    id: "i",
                    data: e.name,
                },
                {
                    id: "j",
                    data: e.team || "-",
                },
                { id: "k", data: e.score || 0 },
            ],
        };
    });

    const showProfile = (e: any) => {
        const id = e.target.outerText;
        if (paidMembers.find((e: any) => e.name === id)) {
            navigate(`/profile/${id}`);
        }
    };

    return (
        <>
            <Button
                onClick={() => {
                    const hasHistory = window.history.length > 2;
                    hasHistory ? navigate(-1) : navigate("/");
                }}
                FrameComponent={FrameUnderline}
                palette="primary"
            >
                Retour
            </Button>
            <br />
            <br />
            <h1>Équipes</h1>
            <Table
                animator={{ animate: false }}
                headers={[
                    { id: "e", data: "Équipe" },
                    { id: "d", data: "Tipiz" },
                ]}
                dataset={datasetTeams}
                columnWidths={["50%", "50%"]}
            />
            <h1>Mercenaires</h1>
            <div onClick={showProfile}>
                <Table
                    animator={{ animate: false }}
                    headers={[
                        { id: "a", data: "Nom" },
                        { id: "c", data: "Équipe" },
                        { id: "b", data: "Tipiz" },
                    ]}
                    dataset={datasetMercenaires}
                    columnWidths={["40%", "35%", "25%"]}
                />
            </div>
        </>
    );
}
