import { Link } from "@remix-run/react";
import { Button, Table } from "@arwes/core";

// 23.30  - blondie b2b Elena

// 1.30 - Freezer

// FIN 3H30

const artists = [
    {
        name: "libre accès",
        schedule: "21:00",
        type: "toutes",
        day: "friday",
    },
    {
        name: "Long Dail",
        schedule: "23:00",
        type: "Break House",
        day: "friday",
    },
    {
        name: "Perle",
        schedule: "00:00",
        type: "Acid House",
        day: "friday",
    },
    {
        name: "Jennifer System",
        schedule: "01:30",
        type: "Electronic",
        day: "friday",
    },
    {
        name: "Jave Marlou",
        schedule: "02:30",
        type: "Raw House",
        day: "friday",
    },
    {
        name: "L2",
        schedule: "04:00",
        type: "Techno",
        day: "friday",
    },
    {
        name: "libre accès",
        schedule: "21:00",
        type: "toutes",
        day: "saturday",
    },
    {
        name: "Dj Jounette ",
        schedule: "22:30",
        type: "Tribal",
        day: "saturday",
    },
    {
        name: "Blondie b2b Elena",
        schedule: "23:30",
        type: "Techno",
        day: "saturday",
    },
    {
        name: "(fr)eezer",
        schedule: "01:30",
        type: "Closing éclectique",
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
                { id: "q", data: artist.name },
                { id: "z", data: artist.type },
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
            <h3>Vendredi (21h-5h)</h3>
            <Table
                animator={{ animate: false }}
                headers={headers}
                dataset={dataset("friday")}
                columnWidths={["27%", "37%", "36%"]}
            />
            <h3>Samedi (21h-3h30)</h3>
            <Table
                animator={{ animate: false }}
                headers={headers}
                dataset={dataset("saturday")}
                columnWidths={["27%", "37%", "36%"]}
            />
        </>
    );
}
