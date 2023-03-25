import { Button, Text } from "@arwes/core";
import { Link } from "@remix-run/react";

export default function Ateliers() {
    return (
        <>
            <Link to="/">
                <Button palette="primary">Retour au portail</Button>
            </Link>
            <br />
            <br />
            <h1>Ateliers</h1>
            <br />
            <Text>
                Le comité en charge des ateliers est en charge de la
                programmation de ces derniers. Une fois définis, ces ateliers
                seront annoncés sur le site web et sur les réseaux sociaux.
            </Text>
        </>
    );
}
