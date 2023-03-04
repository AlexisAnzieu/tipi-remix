import { Button } from "@arwes/core";
import { Link, useOutletContext } from "@remix-run/react";

export default function Budget() {
    const { directusUsers } = useOutletContext<any>();
    const users = directusUsers.filter((u: any) => u.has_paid);
    return (
        <>
            <Link to="/">
                <Button palette="primary">Retour au portail</Button>
            </Link>
            <br />
            <br />
            <h1>Budget</h1>
            <h4>Recettes</h4>
            80$ * {users.length} mercenaires = {80 * users.length} $
            <br />
            <br />
            <h4>Dépenses</h4>
            <iframe
                width="600"
                height="371"
                seamless
                frameborder="0"
                scrolling="no"
                src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQTVM8zzxNsVSCWZR60YGANxva0CuTD5sOG3dZmEu6_Ied9FEIeU8nLdLiIo-9lG3jYGyHVe6arHo8q/pubchart?oid=381837368&amp;format=interactive"
            ></iframe>
            Total: $5 212,24
        </>
    );
}
