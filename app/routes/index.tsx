import { Text, FrameHexagon, Button, FrameUnderline } from "@arwes/core";
import { Link } from "@remix-run/react";

export default function Index() {
    return (
        <>
            <h1>PORTAIL INTERGALACTIQUE</h1>
            <div style={{ display: "flex" }}>
                <div style={{ width: "50%", textAlign: "left" }}>
                    <Link to="/faq">
                        <Button FrameComponent={FrameUnderline}>
                            Centre d'information galactique{" "}
                        </Button>
                    </Link>
                    <br />
                    <Link to="/frequences">
                        <Button FrameComponent={FrameUnderline}>
                            Fréquences sonores
                        </Button>
                    </Link>
                    <br />
                    <Link to="/comites">
                        <Button FrameComponent={FrameUnderline}>
                            Les 7 Comités
                        </Button>
                    </Link>
                    <br />
                    <br />
                </div>
                <div style={{ width: "50%", textAlign: "right" }}>
                    <Link to="/billeterie">
                        <Button FrameComponent={FrameUnderline}>
                            Billeterie cosmique
                        </Button>
                    </Link>
                    <br />
                    <Link to="/ateliers">
                        <Button FrameComponent={FrameUnderline}>
                            Ateliers
                        </Button>
                    </Link>
                    <br />
                </div>
            </div>
            <br />
            <br />
            <h3>REVE.S DE TIPI</h3>
            <h5>25 Mars 2151 - 10:09:13</h5>
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
                    Un an après s'être établi, le groupe de mercenaires
                    scientifique éprouvait le besoin de se ressourcer et de
                    renforcer sa cohésion. Ainsi, ils eurent l'ingénieuse idée
                    d'organiser un campement dans la forêt afin de concevoir une
                    fête foraine. <br /> <br />
                    Les scientifiques se mirent aussitôt à la tâche pour
                    planifier cet événement. Chacun proposa une activité qu'il
                    souhaitait mettre en place, créant ainsi une liste
                    d'attractions. Ils construisirent des manèges, des stands de
                    nourriture et des jeux pour le divertissement des visiteurs.
                    <br /> <br /> Au commencement, les scientifiques eurent des
                    difficultés à se retrouver dans ce nouvel environnement, car
                    ils étaient habitués à évoluer en laboratoire et avaient
                    peine à s'abandonner au divertissement. Cependant, ils
                    découvrirent rapidement que travailler de concert à
                    l'élaboration de la fête renforçait leur cohésion et leur
                    complicité. <br /> <br /> La fête foraine remporta un grand
                    succès. Les scientifiques accueillirent des visiteurs venus
                    de l'ensemble du pays et proposèrent des jeux et des manèges
                    captivants. Les visiteurs furent ravis de rencontrer des
                    scientifiques et de découvrir les dessous de leur travail.
                    Les scientifiques se réjouirent de partager leur passion.{" "}
                    <br />
                    <br /> Le soir venu, les scientifiques se rassemblèrent
                    autour d'un feu de camp et échangèrent sur la façon dont la
                    fête avait renforcé leur cohésion et leur avait permis de se
                    ressourcer. Ils convirent que la création d'une fête foraine
                    était un excellent moyen de renforcer leur amitié et de
                    partager leur amour pour la science avec le monde. <br />{" "}
                    <br />
                    Lorsqu'arriva la fin du week-end, les scientifiques
                    démontèrent les manèges et les stands de nourriture,
                    éteignirent les lumières et quittèrent leur campement dans
                    la forêt. Toutefois, ils étaient convaincus que cette
                    expérience demeurerait à jamais gravée dans leur mémoire et
                    avait renforcé leur camaraderie et leur esprit d'équipe pour
                    les années à venir.
                </Text>
                <img
                    style={{
                        paddingTop: "50px",
                    }}
                    src="./images/tipi.jpg"
                    alt="A nebula"
                />
            </FrameHexagon>
            <br />
            <br />
            <h3>TIPI FESTIVAL DEUX</h3>
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
                    La liste définitive des mercenaires est fixée! 86 téméraires
                    subdivisés en 10 équipes vont se confronter afin de
                    découvrir les secrets de la montagne. La liste des
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
