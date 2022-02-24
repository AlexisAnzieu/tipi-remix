import { Button, FrameUnderline } from "@arwes/core";
import { Link } from "remix";

export default function Profile() {
    return (
        <>
            <h1>Profile</h1>
            <Link to="/">
                <Button FrameComponent={FrameUnderline}>
                    Retour au portail
                </Button>
            </Link>
        </>
    );
}
