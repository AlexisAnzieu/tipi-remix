import { Text, FrameHexagon, Button, FrameUnderline } from "@arwes/core";
import { Link, useOutletContext } from "remix";

export default function Index() {
    const { session } = useOutletContext<any>();

    return (
        <>
            <h1>PORTAIL INTERGALACTIQUE</h1>
            <Link to={`/profile/${session.name}`}>
                <Button FrameComponent={FrameUnderline}>
                    Carte d'identification
                </Button>
            </Link>
            <br />
            <Link to="/members">
                <Button FrameComponent={FrameUnderline}>
                    Liste des mercenaires
                </Button>
            </Link>
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
