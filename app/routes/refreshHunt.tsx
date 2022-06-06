import { LoaderFunction } from "remix";
import { directus } from "~/utils/directus";
import * as _ from "lodash";

const gages = ["cloche_pied", "marelle"];

const shuffleArray = (users: any[]): string[] => {
    return [...users]
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
};

export let loader: LoaderFunction = async () => {
    const { data: directusUsers } = await directus
        .items("tipi_users")
        .readByQuery({
            filter: {
                has_paid: true,
            },
        });

    const hunters = shuffleArray(_.cloneDeep(directusUsers) as any);
    const runners: any = shuffleArray(_.cloneDeep(directusUsers) as any);

    const huntList = gages.map((gage) => {
        const hunter = hunters?.pop() as any;
        const runner = runners
            ?.filter((u: any) => u.team !== hunter.team)
            ?.pop();
        return {
            name: gage,
            hunter: hunter.facebook_id,
            runner: runner.facebook_id,
            status: "inprogress",
        };
    });

    console.log(huntList);

    await directus.items("Hunt").createMany(huntList);
    return null;
};
