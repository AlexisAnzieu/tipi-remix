import { Button, FrameUnderline, Text } from "@arwes/core";
import { Link, useOutletContext } from "remix";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const navigate = useNavigate();
    const { session } = useOutletContext<any>();
    console.log(session);
    return (
        <>
            <h1>Carte d'identification</h1>
            <Link to="/">
                <Button FrameComponent={FrameUnderline}>Retour</Button>
            </Link>
            <h4 style={{ paddingTop: "60px" }}>Nom</h4>
            <Text
                style={{ paddingBottom: "30px" }}
                animator={{ duration: { enter: 1000, exit: 1000 } }}
            >
                {session.user.user_metadata.full_name}
            </Text>
            <h4>Adresse Galactique</h4>
            <Text
                style={{ paddingBottom: "30px" }}
                animator={{ duration: { enter: 1000, exit: 1000 } }}
            >
                {session.user.user_metadata.email}
            </Text>
            <h4>Status opérationnel</h4>
            <Text animator={{ duration: { enter: 1000, exit: 1000 } }}>
                Validé
            </Text>
        </>
    );
}
