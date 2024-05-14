import { Button, FrameBox, FrameLines } from "@arwes/core";
import { Link } from "@remix-run/react";

export default function Billetterie() {
  return (
    <>
      <Link to="/">
        <Button palette="primary">Retour au portail</Button>
      </Link>
      <br />
      <br />
      <h3>Billetterie antique</h3>
      <FrameBox
        palette="error"
        animator={{ activate: true }}
        linesWidths={[2, 0, 4, 0]}
      >
        Attention! N'achetez votre billet que si vous êtes invités à{" "}
        <Link to="https://www.facebook.com/events/2185834221764370">
          cet événement sur Facebook.
        </Link>{" "}
        Dans le cas contraire, nous serons contraints d'annuler votre paiement.
      </FrameBox>
      <br />
      <br />
      <FrameBox animator={{ activate: true }} linesWidths={[2, 0, 4, 0]}>
        Au moment de payer votre billet, vous serez amenés à participer à
        l'organisation de l'événement en{" "}
        <Link to="/comites">rejoignant un des trois comités</Link>. Vous pouvez
        aussi choisir de n'en rejoindre aucun, c'est vous qui décidez!
      </FrameBox>
      <br />
      <br />
      <br />
      <center>
        <a
          target="_blank"
          href="https://www.zeffy.com/fr-CA/ticketing/2ddbff57-f0e0-4fd5-bfb3-4e8b607d0d85"
        >
          <Button FrameComponent={FrameLines}>
            Ouvrir le module de paiement
          </Button>
        </a>
      </center>
    </>
  );
}
