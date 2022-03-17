import { Button, FrameUnderline, Text } from "@arwes/core";
import { Link, useOutletContext } from "remix";

export default function Profile() {
    const { session } = useOutletContext<any>();
    return (
        <>
            <h1>Carte d'identification</h1>
            <Link to="/">
                <Button FrameComponent={FrameUnderline}>Retour</Button>
            </Link>
            <img
                style={{
                    paddingTop: "50px",
                }}
                src={session._json.picture.data.url}
                alt="A nebula"
            />
            <h4 style={{ paddingTop: "60px" }}>Nom</h4>
            <Text
                style={{ paddingBottom: "30px" }}
                animator={{ duration: { enter: 1000, exit: 1000 } }}
            >
                {session.displayName}
            </Text>
            <h4>Adresse Galactique</h4>
            <Text
                style={{ paddingBottom: "30px" }}
                animator={{ duration: { enter: 1000, exit: 1000 } }}
            >
                {session._json.email}
            </Text>
            <h4>Status opérationnel</h4>
            <Text animator={{ duration: { enter: 1000, exit: 1000 } }}>
                Validé
            </Text>
        </>
    );
}
