import { Button, FrameBox } from "@arwes/core";
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
            <h4>Comité artistique</h4>
            <br />
            <br />
            <h4>Comité technique</h4>
            <br />
            <br />
            <h4>Comité environnemental</h4>
            <br />
            <br />
            <h4>Comité des divertissements</h4>
            <br />
            <br />
            <h4>Comité associatif et ouvrier</h4>
            <br />
            <br />
            <h4>Comité d'accueil</h4>
            <br />
            <br />
            <h4>Comité alimentaire</h4>
            <br />
            <br />
        </>
    );
}
