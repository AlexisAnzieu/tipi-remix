import { Button, FrameBox, FrameHexagon, Text } from "@arwes/core";
import { Link, LoaderFunction, useLoaderData } from "remix";
import { authenticator } from "~/utils/auth.server";
import { directus } from "~/utils/directus";

const enigme: Record<number | string, string> = {
    42: "Tu souhaites explorer le site d'atterrissage ? Avant toute chose, munissons-nous d'eau. Où pourrait bien t-on en trouver...",
    5887: "Voilà notre gourde bien remplie ! Allons maintenant chevaucher notre fidèle destrier resté au haras",
    2933: "Quelle déception... Les écuries sont bien vides... Je me demande si un autochtone ne cache pas un étalon derrière une de ces cabanes en bois non loin",
    6342: `Hourra ! Quelle belle allure il a ! Tout en métal resplendissant. <br>   <br>   <img
    style={{
        paddingTop: "20px",
    }}
    src="https://media.istockphoto.com/photos/chrome-robot-horse-picture-id140472557?k=20&m=140472557&s=612x612&w=0&h=J03Umc-IHL0T5h2cutxhdg5PFGJUbrpEtqm5aPZQ-lw="
    alt="A nebula"/>
    <br> <br> Mais voilà que sitôt détaché il s'échappe. Il devait être assoiffé... Si nous arrivions à déterminer de quel liquide un cheval mécanique s'hydrate nous pourrions peut-être le retrouver... (indice: 2.20$ en ce moment)`,
    9345: "Le cheval est bien ici ! Mais quel boucan ! À quoi sert donc cette machine infernale ? Suivons ce cable bleu jusqu'à trouver un indice",
    9111: "Hmm c'est le bon cable  mais ce n'est pas un vrai indice. Continuons à chercher !",
    9323: "Grrr toujours le bon cable, mais ce n'est toujours pas un indice. Quelle frustration !",
    9735: "Enfin ! Il semblerait que ce cable alimente un puissant moteur de sociabilité permettant aux humains de se retrouver et rire ensemble. Essayons d'inverser sa couleur pour voir ce que cela donne... (indice: tu peux aussi entrer des lettres ci-dessous)",
    UELB: "Enfer et damnation ! Voici que nous avons déclenché une perturbation cosmique. Le moteur social est maintenant confronté à son pire ennemi de toujours, l'envie pressante d'aller aux toilettes galactiques ! Il y a en a trois sur le site, observons les toutes afin de déterminer laquelle est la plus plaisante!",
    PIIP: "1: Tu dors dedans ce soir",
    CCAA: "2: Préposition la plus connue",
    COQP: "3: Quand c'est petit c'est minus****",
    PIEUVR: "Aussitôt que tu as chuchotté son nom, cette dernière sort des fourrages et te supplie de l'aider à retourner sur sa planète. Malheureusement elle ne sait plus où elle habite car elle n'a plus toute sa tête...",
    8463: "'Ah! C'est bon!' s'exclama Pieuvrette. 'Je viens de la planète Linotte et j'étais venu ici pour cueillir des soucoupes. J'en ai trouvé 9. Peux-tu vérifier si c'est toujours le cas?' (indice: il faut entrer le chiffre en lettre ci-dessous)",
    HUIT: "'En effet... J'ai bien une tête de Linotte!' s'écria t-elle juste avant de s'envoler dans sa fusée argentée",
    373: "Tu la regardes partir au loin... Te demandant quel crétin de l'orga avait bien pu faire un scénario avec une pieuvre astronaute dôtée de cordes vocales.",
};

export const loader: LoaderFunction = async ({ request }) => {
    const number = request.url?.split("?")[1]?.split("=")[1];

    if (number === `${9232}`) {
        const session: any = await authenticator.isAuthenticated(request);
        const userId = session.facebook_id;
        const user: any = await directus.items("tipi_users").readOne(userId);

        if (!user.hasPlayed) {
            await directus.items("tipi_users").updateOne(userId, {
                score: user.score + 50,
                hasPlayed: true,
            });
        }
    }

    return {
        enigme:
            enigme[number] || "Ces caractères ne correspondent à aucun indice.",
        number,
    };
};

export default function Tresor() {
    const { enigme, number } = useLoaderData();
    const lastEnigme = number === "9232";

    return (
        <>
            <Link to="/">
                <Button palette="primary">Retour au portail</Button>
            </Link>
            <br />
            <br />
            <h1>Trésor de la pieuvre</h1>
            {number && (
                <>
                    <h2>{number}</h2>
                    <FrameHexagon
                        animator={{
                            duration: {
                                enter: 1000,
                            },
                            activate: true,
                        }}
                        hover
                    >
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
                            <div
                                dangerouslySetInnerHTML={{ __html: enigme }}
                            ></div>
                        </Text>
                    </FrameHexagon>
                </>
            )}
            <br />
            <br />
            <br />
            <br />
            {!lastEnigme && (
                <form>
                    <div style={{ display: "flex" }}>
                        Entre ici l'indice
                        <input id="tresorId" name="tresorId" type="text" />
                        <Button type="submit" FrameComponent={FrameBox}>
                            Valider
                        </Button>
                    </div>
                </form>
            )}
            {lastEnigme && (
                <>
                    <h3>
                        Félicitations ! Tu es allé.e au bout de l'aventure !
                    </h3>
                    50 points viennent d'être ajoutés à ton compte.
                </>
            )}
        </>
    );
}
