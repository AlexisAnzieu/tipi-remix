import { Button, FrameBox } from "@arwes/core";
import { Link } from "@remix-run/react";

export default function Billeterie() {
    return (
        <>
            <Link to="/">
                <Button palette="primary">Retour au portail</Button>
            </Link>
            <br />
            <br />
            <h3>Billeterie cosmique</h3>
            <FrameBox animator={{ activate: true }} linesWidths={[2, 0, 4, 0]}>
                Au moment de payer votre billet, vous serez emmené à participer
                à l'organisation de l'événement en{" "}
                <Link to="/comites">rejoignant un des septs comités</Link>. Vous
                pouvez aussi choisir de n'en rejoindre aucun, c'est vous qui
                décidez!
            </FrameBox>
            <br />
            <br />
            <div
                style={{
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                    height: "70vh",
                }}
            >
                <iframe
                    title="Donation form powered by Zeffy"
                    style={{
                        position: "absolute",
                        border: 0,
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        width: "100%",
                        height: "100%",
                    }}
                    src="https://www.zeffy.com/fr-CA/embed/ticketing/9fe5b58e-51d9-4a9d-b73e-bbc26fd208c9"
                    allowTransparency={true}
                ></iframe>
            </div>
        </>
    );
}
