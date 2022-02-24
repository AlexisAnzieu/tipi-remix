import { Session } from "@supabase/supabase-js";
import { Client } from "@notionhq/client";

const notion = new Client({
    auth: "secret_LBsUIf4CYt9PNHqif7YzXa1QU3ECvgcI4WyirWAdX7t",
});

const databaseId = "7a30bf647c9f4925baacc3d6721b4fb3";

export const getMembers = async () => {
    const res = await notion.databases.query({
        database_id: databaseId,
        sorts: [
            {
                property: "Score",
                direction: "descending",
            },
            {
                property: "firstName",
                direction: "ascending",
            },
        ],
    });
    return res.results;
};

const extractMembers = (table: any) => {
    return table.map((row: any) => ({
        name: `${row.properties.firstName.title[0].plain_text} ${row.properties.lastName.rich_text[0]?.plain_text || ""
            }`,
        hasPaid: row.properties.hasPaid.checkbox,
    }));
};


export const setUserPermissionType = (
    session: Session | null,
    members: any
): "NONE" | "INVALID_MEMBER" | "MEMBER_NO_PAID" | "MEMBER_PAID" => {
    const extractedMembers: { name: string; hasPaid: boolean }[] = extractMembers(members);

    if (!session) {
        return "NONE";
    }
    const fullName = session.user?.user_metadata.full_name;
    const found = extractedMembers.find((element) => element.name === fullName);
    if (!found) {
        return "INVALID_MEMBER";
    }
    if (!found.hasPaid) {
        return "MEMBER_NO_PAID";
    }
    return "MEMBER_PAID";
};
