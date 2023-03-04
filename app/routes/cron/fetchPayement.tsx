import { LoaderFunction } from "remix";

export let loader: LoaderFunction = ({ request, params }: any) => {
    console.log("hello");
};
