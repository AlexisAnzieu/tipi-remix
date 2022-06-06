import { Button } from "@arwes/core";
import { Link } from "remix";

export default function Tresor() {
    return (
        <>
            <Link to="/">
                <Button palette="primary">Retour au portail</Button>
            </Link>
            <br />
            <br />
            <h1>Trésor</h1>
        </>
    );
}
