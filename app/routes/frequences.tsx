import { Link } from "@remix-run/react";
import { Button, Table } from "@arwes/core";

// 23.30  - blondie b2b Elena

// 1.30 - Freezer

// FIN 3H30

const artists = [
  // Vendredi
  {
    name: "Jave Marlou",
    schedule: "22:00 - 23:30",
    type: "House / Disco",
    day: "friday",
  },
  {
    name: "Nauemany",
    schedule: "23:30 - 01:00",
    type: "Minimal House",
    day: "friday",
  },
  {
    name: "Kroma",
    schedule: "01:00 - 02:30",
    type: "Techno",
    day: "friday",
  },
  {
    name: "(FR)eezer",
    schedule: "02:30 - 04:00",
    type: "Electro",
    day: "friday",
  },
  // Samedi
  {
    name: "Dj sunset",
    schedule: "18:00 - 20:30",
    type: "sunset vibes",
    day: "saturday",
  }, 
  {
    name: "Danilamalice",
    schedule: "22:00 - 23:30",
    type: "Micro house / Minimal",
    day: "saturday",
  },
  {
    name: "Blondie",
    schedule: "23:30 - 01:00",
    type: "Progressive",
    day: "saturday",
  },
  {
    name: "Luce",
    schedule: "01:00 - 02:30",
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
