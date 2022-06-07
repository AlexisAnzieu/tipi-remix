import { LoaderFunction } from "remix";
import { directus } from "~/utils/directus";

const teams = [
    "Comet Kids",
    "Solar Space Cadets",
    "Astronaut Divas",
    "Saturn Rangers",
    "Angels of Venus",
    "Galaxy Goons",
    "Jupiter Jedi",
    "Mars All-Stars",
    "Moon Patrols",
    "Planet Mush",
];

const shuffleArray = (users: any[]): string[] => {
    return [...users]
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
};

const selectTeam = (index: number) => {
    return teams[index % 10];
};

export let loader: LoaderFunction = async () => {
    const { data: directusUsers } = await directus
        .items("tipi_users")
        .readByQuery({
            filter: {
                has_paid: true,
            },
        });

    const bindTeamUser = shuffleArray(directusUsers as any[])?.map(
        (user: any, i: number) => ({
            id: user.facebook_id,
            team: selectTeam(i),
        })
    );

    bindTeamUser.forEach(async (boundUser) => {
        await directus.items("tipi_users").updateOne(boundUser.id, {
            team: boundUser.team,
        });
    });

    return bindTeamUser.length;
};
