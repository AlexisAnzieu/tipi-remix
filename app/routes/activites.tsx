import { Button, Text } from "@arwes/core";
import { Link } from "@remix-run/react";

export default function Activites() {
  return (
    <>
      <Link to="/">
        <Button palette="primary">Retour au portail</Button>
      </Link>
      <br />
      <br />
      <h1>Activités</h1>
      <br />
      <Text>
        Le comité en charge des divertissements est en charge de la
        programmation de ces dernières. Une fois définis, ces activités seront
        annoncées sur le site web et sur les réseaux sociaux.
      </Text>
    </>
  );
}
