const extractMembers = (table: any) => {
    return table.filter((row: any) => row.properties.fullName.title[0]).map((row: any) => ({
        name: row.properties.fullName.title[0].plain_text,
    }));
};

export const setUserPermissionType = (
    session: any | null,
    members: any
): "NONE" | "INVALID_MEMBER" | "MEMBER_NO_PAID" | "MEMBER_PAID" => {
    const extractedMembers: { name: string }[] = extractMembers(members);
    if (!session) {
        return "NONE";
    }
    const fullName = session.name;
    const found = extractedMembers.find((element) => element.name === fullName);
    if (!found) {
        return "INVALID_MEMBER";
    }
    if (!session.has_paid) {
        return "MEMBER_NO_PAID";
    }
    return "MEMBER_PAID";
};
