import { Button } from "@arwes/core";
import { Link } from "@remix-run/react";

export default function Plan() {
    return (
        <>
            <Link to="/">
                <Button palette="primary">Retour au portail</Button>
            </Link>
            <br />
            <br />
            <h1>Plan</h1>

            <img src="/images/plan.png" alt="Plan" />
        </>
    );
}
