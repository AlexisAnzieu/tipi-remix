import { Button, FrameBox, Text } from "@arwes/core";
import { useNavigate } from "@remix-run/react";

export default function Comites() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <>
      <Button onClick={goBack} palette="primary">
        Retour
      </Button>
      <br />
      <br />
      <h1>Les 3 comités</h1>
      <FrameBox animator={{ activate: true }} linesWidths={[2, 0, 4, 0]}>
        Afin d'organiser le festival antique, les scientifiques se sont
        subdivisés en 3 comités. Chaque comité est responsable d'une partie de
        la vie de la communauté et un budget lui sera alloué.
      </FrameBox>
      <br />
      <br />
      <br />
      <br />
      <h4>Comité d'accueil</h4>
      <hr />
      <Text
        animator={{
          duration: {
            enter: 5000,
            exit: 1000,
          },
          activate: true,
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <ul>
          <li>
            Accueillir les participants : Les membres de l'équipe doivent être
            prêts à accueillir les participants dès leur arrivée sur le site du
            festival. Ils doivent les aider à trouver leur chemin, à récupérer
            leur bracelet ou leur billet d'entrée et à répondre à toutes leurs
            questions.
          </li>
          <br />
          <li>
            Fournir des informations : Les membres de l'équipe doivent être
            informés sur tous les aspects du festival, tels que la
            programmation, les horaires, les points de restauration, les
            toilettes, etc. Ils doivent être prêts à répondre aux questions des
            participants et à leur fournir toutes les informations dont ils ont
            besoin.
          </li>
          <br />
          <li>
            Assister les artistes : En plus d'aider les participants, l'équipe
            d'accueil pourrait également être amenée à assister les artistes.
            Cela pourrait inclure les aider à installer leur équipement, les
            guider vers les lieux de performance ou les aider à régler des
            problèmes logistiques.
          </li>
          <br />
        </ul>
      </Text>
      <br />
      <br />
      <h4>Comité des divertissements</h4>
      <hr />
      <Text
        animator={{
          duration: {
            enter: 5000,
            exit: 1000,
          },
          activate: true,
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <ul>
          <li>
            Concevoir les jeux : L'équipe devra concevoir des jeux amusants et
            attractifs pour les participants. Ils devront prendre en compte
            l'âge des joueurs, leur niveau de compétence et leur intérêt.
          </li>
          <br />
          <li>
            Acheter les fournitures : L'équipe devra acheter toutes les
            fournitures nécessaires pour les jeux, y compris les prix à gagner.
            Ils devront également s'assurer que les jeux et les fournitures sont
            en bon état de fonctionnement. . Pour les achats, un budget sera
            alloué et l’argent sera versé via interac en amont.
          </li>
          <br />
          <li>
            Installer les jeux :L'équipe pourra participer à l’installation des
            jeux sur le site du festival en utilisant des normes de sécurité
            appropriées. Ils devront également s'assurer que les jeux sont bien
            placés et faciles d'accès pour les participants.
          </li>
          <br />
          <li>
            Surveiller les jeux : L'équipe devra surveiller les jeux pour
            s'assurer qu'ils sont utilisés en toute sécurité et de manière
            équitable. Ils devront également aider les participants à comprendre
            les règles des jeux et à répondre à toutes les questions qu'ils
            pourraient avoir.
          </li>
          <br />
          <li>
            Distribuer les prix : L'équipe devra distribuer les prix aux
            participants qui ont réussi à gagner les jeux. Ils devront également
            s'assurer que les prix sont distribués équitablement et que chaque
            participant reçoit son prix.
          </li>
          <br />
          <li>
            Démonter les jeux : Après la fin du festival, l'équipe devra
            démonter les jeux et ranger les fournitures. Ils devront également
            s'assurer que le site est laissé propre et en bon état.
          </li>
          <br />
        </ul>
      </Text>
      <br />
      <br />
      <br />
      <h4>Comité alimentaire du soir</h4>
      <hr />
      <Text
        animator={{
          duration: {
            enter: 5000,
            exit: 1000,
          },
          activate: true,
        }}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <ul>
          <li>
            Planifier le menu : L'équipe devra concevoir un menu varié et adapté
            aux goûts des participants. Ils devront également prendre en compte
            les allergies et les restrictions alimentaires, ainsi que la
            disponibilité des ingrédients.
          </li>
          <br />
          <li>
            Acheter les ingrédients : L'équipe devra se procurer tous les
            ingrédients nécessaires à la préparation des plats. Ils devront
            s'assurer de la qualité et de la fraîcheur des produits, ainsi que
            de leur quantité suffisante pour satisfaire les besoins des
            participants. Pour les achats, un budget vous sera alloué et
            l’argent vous sera versé via interac en amont.
          </li>
          <br />
          <li>
            Préparer les plats : L'équipe devra préparer les plats avec soin et
            respecter les normes d'hygiène alimentaire. Ils devront travailler
            rapidement et efficacement pour préparer les quantités nécessaires
            de nourriture pour les participants.
          </li>
          <br />
          <li>
            Servir la nourriture : L'équipe devra servir la nourriture de
            manière efficace et organisée. Ils devront être prêts à gérer des
            files d'attente importantes.
          </li>
          <br />
          <li>
            Nettoyer : Après la fin du service, l'équipe devra nettoyer les
            équipements. Ils devront également s'assurer que les déchets sont
            correctement triés et éliminés.
          </li>
        </ul>
      </Text>
      <br />
      <br />
    </>
  );
}
