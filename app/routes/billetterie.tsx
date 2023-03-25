import { Button, FrameBox, FrameLines, Text } from "@arwes/core";
import { Link } from "@remix-run/react";

export default function Billetterie() {
    return (
        <>
            <Link to="/">
                <Button palette="primary">Retour au portail</Button>
            </Link>
            <br />
            <br />
            <h3>Billetterie cosmique</h3>
            <FrameBox
                palette="error"
                animator={{ activate: true }}
                linesWidths={[2, 0, 4, 0]}
            >
                Attention! N'achetez votre billet que si vous êtes invités à{" "}
                <Link to="https://www.facebook.com/events/610445960951679">
                    cet événement sur Facebook.
                </Link>{" "}
                Dans le cas contraire, nous serons contraints d'annuler votre
                paiement.
            </FrameBox>
            <br />
            <br />
            <FrameBox animator={{ activate: true }} linesWidths={[2, 0, 4, 0]}>
                Au moment de payer votre billet, vous serez amenés à participer
                à l'organisation de l'événement en{" "}
                <Link to="/comites">rejoignant un des septs comités</Link>. Vous
                pouvez aussi choisir de n'en rejoindre aucun, c'est vous qui
                décidez!
            </FrameBox>
            <br />
            <br />
            <br />
            <center>
                <div zeffy-form-link="https://www.zeffy.com/fr-CA/embed/ticketing/9fe5b58e-51d9-4a9d-b73e-bbc26fd208c9?modal=true">
                    <Button FrameComponent={FrameLines}>
                        Ouvrir le module de paiement
                    </Button>
                </div>
                <br />
                ou{" "}
                <Link
                    target="_blank"
                    to="https://www.zeffy.com/fr-CA/ticketing/9fe5b58e-51d9-4a9d-b73e-bbc26fd208c9"
                >
                    cliquez ici{" "}
                </Link>
                si le module ne s'affiche pas
            </center>

            <br />
        </>
    );
}
