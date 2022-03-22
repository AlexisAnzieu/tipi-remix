import { Button, Figure, FrameUnderline, Text } from "@arwes/core";
import { Link, useLoaderData } from "remix";
import { directus } from "~/utils/directus";

export const loader = async ({ params }: any) => {
    const { data: user } = await directus
        .items("tipi_users")
        .readByQuery({ filter: { name: params.id } });
    return { user: user?.[0] };
};

export default function Profile() {
    const { user } = useLoaderData();

    return (
        <>
            <h1>Carte d'identification</h1>
            <Link to="/">
                <Button FrameComponent={FrameUnderline}>Retour</Button>
            </Link>
            <Figure
                fluid
                style={{
                    paddingTop: "50px",
                }}
                src={user.picture}
                alt="A nebula"
            />
            <h4 style={{ paddingTop: "60px" }}>Nom</h4>
            <Text
                style={{ paddingBottom: "30px" }}
                animator={{ duration: { enter: 1000, exit: 1000 } }}
            >
                {user.name}
            </Text>
            <h4>Adresse Galactique</h4>
            <Text
                style={{ paddingBottom: "30px" }}
                animator={{ duration: { enter: 1000, exit: 1000 } }}
            >
                {user.email}
            </Text>
            <h4>Status opérationnel</h4>
            <Text animator={{ duration: { enter: 1000, exit: 1000 } }}>
                Validé
            </Text>
        </>
    );
}
