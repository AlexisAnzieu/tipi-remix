import { Text, FrameHexagon, Button, FrameUnderline } from "@arwes/core";
import { Link, useOutletContext } from "remix";

export default function Index() {
    const { session, directusUsers } = useOutletContext<any>();

    return (
        <>
            <div style={{ textAlign: "right", paddingBottom: 10 }}>
                <Link to="/logout">
                    <Button palette="secondary" FrameComponent={FrameUnderline}>
                        Déconnexion
                    </Button>
                </Link>
            </div>
            <h1>PORTAIL INTERGALACTIQUE</h1>
            <div style={{ display: "flex" }}>
                <div style={{ width: "50%", textAlign: "left" }}>
                    <Link to="/frequences">
                        <Button FrameComponent={FrameUnderline}>
                            Fréquences sonores
                        </Button>
                    </Link>
                    <br />
                    <Link to="/members">
                        <Button FrameComponent={FrameUnderline}>
                            Liste des mercenaires
                        </Button>
                    </Link>
                    <br />
                    <Link to={`/profile/${session.name}`}>
                        <Button FrameComponent={FrameUnderline}>
                            Carte d'identification
                        </Button>
                    </Link>
                </div>
                <div style={{ width: "50%", textAlign: "right" }}>
                    <Link to="/tresor">
                        <Button FrameComponent={FrameUnderline}>
                            Trésor de la pieuvre
                        </Button>
                    </Link>
                    <br />
                    <Link to="/vote">
                        <Button FrameComponent={FrameUnderline}>
                            Hunter X Runner
                        </Button>
                    </Link>
                    <br />
                    <Link to="/vote">
                        <Button FrameComponent={FrameUnderline}>
                            Vote stellaire
                        </Button>
                    </Link>
                    <br />
                </div>
            </div>

            <br />
            <br />
            <h5>6 Juin 2150 - 11:00:23</h5>
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
                    La liste définitive des mercenaires est fixée!{" "}
                    {directusUsers.filter((u: any) => u.has_paid).length}{" "}
                    téméraires subdivisés en 10 équipes vont se confronter afin
                    de découvrir les secrets de la montagne. La liste des
                    équipements à prendre est la suivante:
                    <lu>
                        <li>lampe frontale</li>
                        <li>nourriture</li>
                        <li>breuvage</li>
                        <li>glacière</li>
                        <li>parures</li>
                        <li>tente</li>
                        <li>eau</li>
                    </lu>
                </Text>
            </FrameHexagon>
            <br />
            <br />
            <h5>13 Mars 2150 - 17:29:35</h5>
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
                    La prime attire des mercenaires de tout horizon. Leurs
                    accoutrements dépassent l'ententement, on dirait un concours
                    des plus belles parures de la galaxie.
                </Text>
                <img
                    style={{
                        paddingTop: "20px",
                    }}
                    src="./images/moodboard.png"
                    alt="A nebula"
                />
            </FrameHexagon>
            <br />
            <br />
            <h5>31 Janvier 2150 - 10:09:13</h5>
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
                    En 1950, la comète Normand1LX32 s’est écrasée en Lanaudière,
                    sectionnant une montagne en deux. Le lieu de l’impact
                    devient mystérieusement un lieu de passage et d'étranges
                    apparitions ont lieu. Depuis lors, de nombreux scientifiques
                    ont tenté de résoudre l’énigme de cette montagne coupée, en
                    vain. 200 ans plus tard, une escouade de quatre érudits
                    professionnels est envoyée sur place mais toute
                    communication est perdue avec eux. Cependant, des fréquences
                    de 50hz à 20kHz se font entendre dans toute la vallée... Une
                    prime de 2 millions de tipiz (tpz) est offerte à ceux qui
                    lèveront le voile sur cette étrange phénomène.
                </Text>

                <img
                    style={{
                        paddingTop: "50px",
                    }}
                    src="./images/wallpaper.jpeg"
                    alt="A nebula"
                />
            </FrameHexagon>
            <br />
            <br />
        </>
    );
}
