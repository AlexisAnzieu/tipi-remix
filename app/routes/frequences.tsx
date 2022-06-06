import { Link } from "remix";
import { Button, Table } from "@arwes/core";

const artists = [
    {
        name: "Blondie",
        schedule: "22:00",
        type: "progressive house",
        day: "friday",
    },
    {
        name: "Moodjo",
        schedule: "23:30",
        type: "house",
        day: "friday",
    },
    {
        name: "Sound Crate",
        schedule: "01:00",
        type: "micro house",
        day: "friday",
    },
    {
        name: "Wisley",
        schedule: "02:30",
        type: "techno",
        day: "friday",
    },
    {
        name: "(FR)eezer",
        schedule: "03:30",
        type: "to the sunrise dj set",
        day: "friday",
    },
    {
        name: "Perle",
        schedule: "22:00",
        type: "House & Funk",
        day: "saturday",
    },
    {
        name: "Takümi",
        schedule: "23:30",
        type: "Tribal house",
        day: "saturday",
    },
    {
        name: "Evita",
        schedule: "01:00",
        type: "Italo Trance",
        day: "saturday",
    },
    {
        name: "Phazme",
        schedule: "02:30",
        type: "techno",
        day: "saturday",
    },
    {
        name: "Wisley b2b Phazme",
        schedule: "03:30",
        type: "techno nrv",
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
            <h3>Vendredi</h3>
            <Table
                animator={{ animate: false }}
                headers={headers}
                dataset={dataset("friday")}
                columnWidths={["27%", "37%", "36%"]}
            />
            <h3>Samedi</h3>
            <Table
                animator={{ animate: false }}
                headers={headers}
                dataset={dataset("saturday")}
                columnWidths={["27%", "37%", "36%"]}
            />
        </>
    );
}
