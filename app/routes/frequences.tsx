import { Link } from "@remix-run/react";
import { Button, Table } from "@arwes/core";

// 23.30  - blondie b2b Elena

// 1.30 - Freezer

// FIN 3H30

const artists = [
  {
    name: "Sunset Mix",
    schedule: "18:30 - 20h",
    type: "Deep House",
    day: "friday",
  },
  {
    name: "Jave Marlou",
    schedule: "22:00",
    type: "Disco / House",
    day: "friday",
  },
  {
    name: "L2",
    schedule: "00:00",
    type: "House / Techno",
    day: "friday",
  },
  {
    name: "(FR)eezer",
    schedule: "02:30 - 5h",
    type: "Exposé électronique",
    day: "friday",
  },
  {
    name: "Sunset Mix",
    schedule: "18:30 - 20h",
    type: "Deep house",
    day: "saturday",
  },
  {
    name: "Nauemany ",
    schedule: "22:00",
    type: "Tech House",
    day: "saturday",
  },
  {
    name: "P La Lune",
    schedule: "23:30",
    type: "Techno / Dark Disco",
    day: "saturday",
  },
  {
    name: "Jave Marlou b2b (FR)eezer",
    schedule: "01:00",
    type: "Dark disco",
    day: "saturday",
  },
  {
    name: "Kroma",
    schedule: "02:30 - 4h",
    type: "Techno",
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
        { id: "p", data: "en cours d'analyse..." },
        { id: "q", data: "en cours d'analyse..." },
        { id: "z", data: "en cours d'analyse..." },
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
