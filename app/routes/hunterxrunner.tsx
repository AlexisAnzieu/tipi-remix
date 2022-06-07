import { Button } from "@arwes/core";
import { Link } from "remix";

export default function Tresor() {
    return (
        <>
            <Link to="/">
                <Button palette="primary">Retour au portail</Button>
            </Link>
            <br />
            <br />
            <h1>Hunter X Runner</h1>
            <br />
            Il s'agit de chasser un maximum de joueurs sans se faire prendre !
            C'est un jeu de rôle qui consiste pour chaque joueur à recevoir une
            cible et une mission. Aussi nommé "jeu du killer".
            <br />
            <br />
            Chaque fois qu’un joueur parvient à piéger une cible, il récupère la
            (ou les missions) en sa possession ainsi que la dernière mission qui
            devient donc la sienne.
            <br />
            <br /> Attention ! Si la cible se rend compte qu’il s’agit d’une
            mission il y alors « contre-kill » : échec de la mission du
            chasseur. C’est alors lui qui remet sa ou ses cartes à sa cible
            initiale.
            <br />
            <br />
            Chaque mission accomplie rapporte 20 tipiz à la fin de l'aventure.
            <br /> <br />
            Le gagnant de cette animation sera le participant ayant collecté le
            plus de misson possible. Il se verra attribuer un bonus de 100
            tipiz.
        </>
    );
}
