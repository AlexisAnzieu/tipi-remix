import { Session } from "@supabase/supabase-js";

const extractMembers = (table: any) => {
    return table.map((row: any) => ({
        name: row.properties.fullName.title[0].plain_text,
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
