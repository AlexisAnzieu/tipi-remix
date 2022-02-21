import { Session } from "@supabase/supabase-js";

export const setUserPermissionType = (
    session: Session | null,
    members: { name: string; hasPaid: boolean }[]
): "NONE" | "INVALID_MEMBER" | "MEMBER_NO_PAID" | "MEMBER_PAID" => {
    if (!session) {
        return "NONE";
    }
    const fullName = session.user?.user_metadata.full_name;
    const found = members.find((element) => element.name === fullName);
    if (!found) {
        return "INVALID_MEMBER";
    }
    if (!found.hasPaid) {
        return "MEMBER_NO_PAID";
    }
    return "MEMBER_PAID";
};
