import { Button, FrameUnderline } from "@arwes/core";
import { Link } from "remix";
import { useNavigate } from "react-router-dom";

export default function Profile() {
    const navigate = useNavigate();
    return (
        <>
            <h1>Profil</h1>
            <Link to="/">
                <Button
                    onClick={() => {
                        const hasHistory = window.history.length > 2;
                        hasHistory ? navigate(-1) : navigate("/");
                    }}
                    FrameComponent={FrameUnderline}
                >
                    Retour
                </Button>
            </Link>
        </>
    );
}
