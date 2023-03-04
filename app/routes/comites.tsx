import { Button, FrameBox, Text } from "@arwes/core";
import { Link } from "@remix-run/react";

export default function Comites() {
    return (
        <>
            <Link to="/">
                <Button palette="primary">Retour au portail</Button>
            </Link>
            <br />
            <br />
            <h1>Les 7 comités</h1>
            <FrameBox
                animator={{ activate: true }}
                palette="secondary"
                linesWidths={[2, 0, 4, 0]}
            >
                Afin d'assurer la survie du campement, les scientifiques se sont
                subdivisés en 7 comités. Chaque comité est responsable d'une
                partie de la vie de la communauté.
            </FrameBox>
            <br />
            <br />
            <br />
            <h4>Comité d'accueil</h4>
            <Text animator={{ duration: { enter: 1000, exit: 1000 } }}>
                Lorem ipsum dolor sit amet, <b>consectetur adipiscing</b> elit,
                sed do eiusmod tempor{" "}
                <i>
                    incididunt <b>ut labore et dolore magna</b> aliqua
                </i>
                . Ut enim ad minim veniam, quis nostrud exercitation ullamco{" "}
                <a href="#">laboris nisi ut aliquip</a> ex ea commodo consequat.
            </Text>
            <br />
            <br />
            <h4>Comité artistique</h4>
            <Text animator={{ duration: { enter: 1000, exit: 1000 } }}>
                Nous pourrions envisager une décoration ludique et colorée pour
                créer une ambiance de fête foraine. Des ballons, des guirlandes,
                des lumières et des affiches peuvent être utilisés pour recréer
                l'atmosphère joyeuse et festive de la fête foraine.
            </Text>
            <br />
            <br />
            <h4>Comité technique</h4>
            <br />
            <br />
            <h4>Comité environnemental</h4>
            <Text animator={{ duration: { enter: 1000, exit: 1000 } }}>
                Il est important de prévoir un nettoyage régulier de
                l'environnement pendant l'événement pour garantir la sécurité et
                le confort des participants. Il est recommandé de mettre en
                place des poubelles et des sacs poubelles à différents endroits
                du site et de prévoir une équipe de nettoyage pour vider les
                poubelles et nettoyer les zones les plus fréquentées. Il est
                également important de sensibiliser les participants à
                l'importance de la propreté et de les inciter à jeter leurs
                déchets dans les poubelles prévues à cet effet.
            </Text>
            <br />
            <br />
            <h4>Comité des divertissements</h4>
            <br />
            <br />
            <h4>Comité associatif et ouvrier</h4>
            <br />
            <br />
            <h4>Comité alimentaire</h4>
            <br />
            <br />
        </>
    );
}
