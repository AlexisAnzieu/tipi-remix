import { Button, FrameBox, FrameCorners, Table, Text } from "@arwes/core";
import { Link, redirect, useNavigate, useOutletContext } from "remix";
import { directus } from "~/utils/directus";
import { commitSession, getSession } from "~/utils/session.server";

export async function action({ request }: any) {
    const session = await getSession(request.headers.get("Cookie"));
    const body = await request.formData();
    const userId = body.get("userId").trim();

    const { data: directusUsers } = await directus
        .items("tipi_users")
        .readByQuery({
            limit: 200,
            filter: {
                has_paid: true,
            },
        });

    const electedUser: any = directusUsers?.filter((user: any) =>
        user.facebook_id.slice(-6).includes(userId)
    );

    try {
        await directus
            .items("tipi_users")
            .updateOne(session.data._session.facebook_id, {
                elected: electedUser?.[0].facebook_id,
            });
    } catch (error) {
        return redirect("/vote");
    }

    const newSession = {
        ...session,
        data: {
            ...session.data,
            _session: {
                ...session.data._session,
                elected: electedUser?.[0].facebook_id,
            },
        },
    };

    return redirect("/vote", {
        headers: {
            "Set-Cookie": await commitSession(newSession),
        },
    });
}

export default function Vote() {
    const navigate = useNavigate();
    const { directusUsers, session } = useOutletContext<any>();
    let datasetResult: any;

    if (session.elected) {
        const results = directusUsers.reduce(
            (acc: any, cur: any) => ({
                ...acc,
                [cur.elected]: ++acc[cur.elected] || 1,
            }),
            {}
        );

        const clean = Object.keys(results)
            .map((key) => ({
                name: directusUsers.find(
                    (user: any) => user.facebook_id === key
                )?.name,
                count: results[key],
            }))
            .filter((e: any) => e.name)
            .sort((a: any, b: any) => b.count - a.count);

        datasetResult = clean.map((e: any, index: any) => {
            return {
                id: index,
                columns: [
                    {
                        id: "i",
                        data: e.name,
                    },
                    {
                        id: "j",
                        data: e.count || "-",
                    },
                ],
            };
        });
    }

    const showProfile = (e: any) => {
        const id = e.target.outerText;
        if (directusUsers.find((e: any) => e.name === id)) {
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
            <h1>Vote stellaire</h1>
            {session.elected && (
                <>
                    Vous avez voté pour{" "}
                    {
                        directusUsers.filter(
                            (u: any) => u.facebook_id === session.elected
                        )[0].name
                    }
                    <br />
                    <br />
                    <h4>Résultats en direct</h4>
                    <div onClick={showProfile}>
                        <Table
                            animator={{ animate: false }}
                            headers={[
                                { id: "e", data: "Name" },
                                { id: "d", data: "#" },
                            ]}
                            dataset={datasetResult}
                            columnWidths={["50%", "50%"]}
                        />
                    </div>
                </>
            )}
            {!session.elected && (
                <>
                    <Text
                        animator={{
                            duration: {
                                enter: 5000,
                                exit: 1000,
                            },
                            activate: true,
                        }}
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        Il s'agit là de voter pour la plus belle parure de la
                        galaxie. Le gagnant remportera 300 tipiz à la fin de
                        l'aventure. Le vote est unique et définitif. Il te faut
                        pour cela entrer le numéro d'identification de la
                        personne, accessible en cliquant sur son nom dans la
                        liste des mercenaires.
                    </Text>
                    <br />
                    <br />
                    <center>
                        <Button
                            onClick={() => navigate("/members")}
                            FrameComponent={FrameCorners}
                            animator={{ activate: true }}
                        >
                            <Text>Accéder à la liste des mercenaires</Text>
                        </Button>
                        <br />
                        <br />
                        <br />
                        <div style={{ width: 300 }}>
                            <form method="post">
                                <div style={{ display: "flex" }}>
                                    <input
                                        id="userId"
                                        name="userId"
                                        type="text"
                                    />
                                    <Button
                                        type="submit"
                                        FrameComponent={FrameBox}
                                    >
                                        Voter
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </center>
                </>
            )}
        </>
    );
}
