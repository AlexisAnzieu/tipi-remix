import { Link, redirect, useLoaderData, useOutletContext } from "remix";
import { Blockquote, Button, Figure, FrameBox } from "@arwes/core";
import { directus } from "~/utils/directus";
import { authenticator } from "~/utils/auth.server";

export async function action({ request }: any) {
    const body = await request.formData();
    const secretId = body.get("secretId").trim();
    const runnerId = body.get("runnerId").trim();
    const hunterId = body.get("hunterId").trim();
    const huntId = body.get("huntId").trim();

    // The hunter kill the runner
    if (secretId === runnerId.substring(12)) {
        await directus.items("Hunt").updateOne(huntId, { status: "validated" });

        try {
            const { data: takenHunt }: any = await directus
                .items("Hunt")
                .readByQuery({
                    filter: {
                        hunter: runnerId,
                    },
                });

            try {
                await directus.items("Hunt").updateOne(takenHunt[0].id, {
                    status: "inprogress",
                    hunter: hunterId,
                });
            } catch (error) {
                throw new Error(
                    "La personne que tu as tuée n'était liée à aucune chasse, problème d'algo déso!"
                );
            }
        } catch (error) {
            throw new Error("Tu as rentré un secret ID erroné");
        }

        return redirect("/la-chasse");
    }

    // The runner kill the hunter
    const { data: reverseHunt }: any = await directus
        .items("Hunt")
        .readByQuery({
            filter: {
                runner: hunterId,
            },
        });
    if (secretId === reverseHunt[0].hunter.substring(12)) {
        await directus.items("Hunt").updateOne(reverseHunt[0].id, {
            status: "disabled",
        });
        return redirect("/la-chasse");
    }

    return redirect("/la-chasse");
}

export const loader = async ({ request }: any) => {
    const session: any = await authenticator.isAuthenticated(request);
    const { data: hunt }: any = await directus.items("Hunt").readByQuery({
        filter: {
            hunter: session.facebook_id,
            status: "inprogress",
        },
    });
    if (!hunt.length) {
        return {};
    }
    const runner: any = await directus
        .items("tipi_users")
        .readOne(hunt[0].runner);

    return {
        hunt: hunt[0],
        runner,
    };
};

export default function LaChasse() {
    const { hunt, runner } = useLoaderData();
    const { session } = useOutletContext<any>();

    return (
        <>
            <Link to="/">
                <Button palette="primary">Retour au portail</Button>
            </Link>
            <br />
            <br />
            <h2>La Chasse</h2>
            {!hunt && (
                <>
                    Tu as été éliminé (mais tu peux toujours potentiellement te
                    faire chasser). Tu n'es plus autorisé à aider ton équipe non
                    plus. La prochaine fois sera la bonne!
                </>
            )}
            {hunt && runner.team === session.team && (
                <>
                    Le gage que tu as récupéré consistait à chasser un membre de
                    ton équipe... Tu ne peux donc plus chasser mais tu peux
                    toujours continuer à aider ton équipe (et à te faire chasser
                    aussi)!
                </>
            )}
            {hunt && runner.team !== session.team && (
                <>
                    Ton objectif consiste à trouver le mercenaire ci-dessous et
                    lui faire faire le gage explicité. Si il te prend en
                    flagrant délit de chasse, tu as l'obligation de lui
                    divulguer ton secret ID. Le cas contraire, il devra te
                    passer le sien que tu entreras ci-dessous afin de valider
                    ton objectif. Une nouvelle chasse commence alors!
                    <br />
                    <br />
                    <h4>
                        Gage: {hunt.name} <br /> <br />
                        Cible: {runner.name}
                    </h4>
                    <Figure src={runner.picture} alt="A nebula" />
                    Tu as démasqué ton chasseur ou tu as accompli ton objectif ?
                    Entre le secretID ici:
                    <br />
                    <br />
                    <form method="post" action="/la-chasse">
                        <div style={{ display: "flex" }}>
                            <input
                                type="hidden"
                                name="huntId"
                                value={hunt.id}
                            />
                            <input
                                type="hidden"
                                name="runnerId"
                                value={runner.facebook_id}
                            />
                            <input
                                type="hidden"
                                name="hunterId"
                                value={session.facebook_id}
                            />
                            <input id="secretId" name="secretId" type="text" />
                            <Button type="submit" FrameComponent={FrameBox}>
                                Envoyer
                            </Button>
                        </div>
                    </form>
                    <br />
                    <br />
                    <Blockquote palette="secondary">
                        Attention, il y a déjà un mercenaire à ta recherche! De
                        plus, n'oublie pas que tu peux chasser en meute avec ton
                        équipe...
                    </Blockquote>
                </>
            )}
            <br />
            <br />
            <h6>Ton secret ID: {session.facebook_id.substring(12)}</h6>
        </>
    );
}
