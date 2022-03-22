import { Link, useNavigate, useOutletContext } from "remix";
import { Button, Table } from "@arwes/core";

const artists = [
    {
        name: "",
        schedule: "22:00",
        type: "",
        day: "friday",
    },
    {
        name: "",
        schedule: "23:30",
        type: "",
        day: "friday",
    },
    {
        name: "",
        schedule: "01:00",
        type: "",
        day: "friday",
    },
    {
        name: "",
        schedule: "02:30",
        type: "",
        day: "friday",
    },
    {
        name: "",
        schedule: "04:00",
        type: "",
        day: "friday",
    },
    {
        name: "",
        schedule: "20:00",
        type: "",
        day: "saturday",
    },
    {
        name: "",
        schedule: "21:30",
        type: "",
        day: "saturday",
    },
    {
        name: "",
        schedule: "23:00",
        type: "",
        day: "saturday",
    },
    {
        name: "",
        schedule: "00:30",
        type: "",
        day: "saturday",
    },
    {
        name: "",
        schedule: "02:00",
        type: "",
        day: "saturday",
    },
];

const headers = [
    { id: "a", data: "Horaire" },
    { id: "b", data: "Émetteur" },
    { id: "c", data: "Fréquence" },
];
const dataset = (day: string) =>
    artists
        .filter((a: any) => a.day === day)
        .map((artist, index) => ({
            id: index,
            columns: [
                { id: "p", data: artist.schedule },
                { id: "q", data: artist.name || "en cours d'analyse..." },
                { id: "z", data: artist.type || "en cours d'analyse..." },
            ],
        }));
export default function Frequences() {
    return (
        <>
            <Link to="/">
                <Button palette="primary">Retour au portail</Button>
            </Link>
            <br />
            <br />
            <h3>Vendredi [22h-5h]</h3>
            <Table
                animator={{ animate: false }}
                headers={headers}
                dataset={dataset("friday")}
                columnWidths={["27%", "37%", "36%"]}
            />
            <h3>Samedi [20h-4h]</h3>
            <Table
                animator={{ animate: false }}
                headers={headers}
                dataset={dataset("saturday")}
                columnWidths={["27%", "37%", "36%"]}
            />
        </>
    );
}
