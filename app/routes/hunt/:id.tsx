import { Button, Figure, FrameUnderline, Text } from "@arwes/core";
import { useLoaderData, useNavigate } from "remix";
import { directus } from "~/utils/directus";

export const loader = async ({ params }: any) => {
    const { data: user } = await directus
        .items("tipi_users")
        .readByQuery({ filter: { name: params.id } });
    return { user: user?.[0] };
};

export default function Profile() {
    const { user } = useLoaderData();
    const navigate = useNavigate();

    return (
        <>
            <h1>Indices</h1>
        </>
    );
}
