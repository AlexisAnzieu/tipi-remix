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
    name: "Pierre",
    schedule: "23:30",
    type: "Progressive House",
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
      <h3>Samedi (22h-5h)</h3>
      <Table
        animator={{ animate: false }}
        headers={headers}
        dataset={dataset("friday")}
        columnWidths={["27%", "37%", "36%"]}
      />
      <h3>Dimanche (22h-4h)</h3>
      <Table
        animator={{ animate: false }}
        headers={headers}
        dataset={dataset("saturday")}
        columnWidths={["27%", "37%", "36%"]}
      />
    </>
  );
}
