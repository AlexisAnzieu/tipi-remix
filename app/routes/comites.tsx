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
            <h1>Les 7 comités</h1>
            <FrameBox animator={{ activate: true }} linesWidths={[2, 0, 4, 0]}>
                Afin d'assurer la survie du campement, les scientifiques se sont
                subdivisés en 7 comités. Chaque comité est responsable d'une
                partie de la vie de la communauté et un budget lui sera alloué.
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
                        Accueillir les participants : Les membres de l'équipe
                        doivent être prêts à accueillir les participants dès
                        leur arrivée sur le site du festival. Ils doivent les
                        aider à trouver leur chemin, à récupérer leur bracelet
                        ou leur billet d'entrée et à répondre à toutes leurs
                        questions.
                    </li>
                    <br />
                    <li>
                        Fournir des informations : Les membres de l'équipe
                        doivent être informés sur tous les aspects du festival,
                        tels que la programmation, les horaires, les points de
                        restauration, les toilettes, etc. Ils doivent être prêts
                        à répondre aux questions des participants et à leur
                        fournir toutes les informations dont ils ont besoin.
                    </li>
                    <br />
                    <li>
                        Assister les artistes : En plus d'aider les
                        participants, l'équipe d'accueil pourrait également être
                        amenée à assister les artistes. Cela pourrait inclure
                        les aider à installer leur équipement, les guider vers
                        les lieux de performance ou les aider à régler des
                        problèmes logistiques.
                    </li>
                    <br />
                </ul>
            </Text>
            <br />
            <br />
            <h4>Comité artistique</h4>
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
                        Concevoir le plan de décoration : L'équipe devra
                        concevoir un plan de décoration pour le festival, qui
                        devra inclure les couleurs, les motifs et les éléments
                        de design en accord avec le thème de la fête foraine.
                        Ils devront également s'assurer que le plan est
                        réalisable en fonction des contraintes de temps et de
                        budget.
                    </li>
                    <br />
                    <li>
                        Acheter les fournitures : L'équipe devra acheter toutes
                        les fournitures nécessaires pour la décoration, comme
                        des ballons, des guirlandes, des affiches, des bannières
                        et autres décorations de fête foraine.
                    </li>
                    <br />
                    <li>
                        Installer les décorations : L'équipe devra installer les
                        décorations sur le site du festival en utilisant des
                        normes de sécurité appropriées. Ils devront également
                        s'assurer que les décorations sont bien placées et
                        faciles d'accès pour les participants.
                    </li>
                    <br />
                    <li>
                        Coordonner avec les autres équipes : L'équipe devra
                        travailler en étroite collaboration avec les autres
                        équipes du festival, comme celle chargée des jeux ou
                        celle chargée de la nourriture, pour garantir que la
                        décoration est cohérente avec le thème général de la
                        fête.
                    </li>
                    <br />
                    <li>
                        Nettoyer : Après la fin du festival, l'équipe devra
                        démonter les décorations et ranger les fournitures. Ils
                        devront également s'assurer que le site est laissé
                        propre et en bon état.
                    </li>
                    <br />
                </ul>
            </Text>
            <br />
            <br />
            <h4>Comité technique</h4>
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
                        Planification : L'équipe doit travailler en étroite
                        collaboration avec les organisateurs pour comprendre les
                        besoins en matière d'équipement technique, tels que les
                        éclairages, les haut-parleurs, les micros, les écrans,
                        etc. Ils doivent planifier et coordonner les besoins
                        techniques en fonction de la configuration de
                        l'événement.
                    </li>
                    <br />
                    <li>
                        Installation : L'équipe doit installer et configurer
                        tous les équipements techniques nécessaires pour le bon
                        déroulement de l'événement. Cela inclut la pose de
                        câbles et de tuyaux, l'assemblage de structures, la mise
                        en place des écrans, des haut-parleurs et des lumières,
                        etc.
                    </li>
                    <br />
                    <li>
                        Tests : L'équipe doit effectuer des tests sur tous les
                        équipements installés pour s'assurer qu'ils fonctionnent
                        correctement avant l'ouverture de l'événement. Ils
                        doivent également surveiller l'équipement tout au long
                        de l'événement pour s'assurer que tout fonctionne
                        correctement.
                    </li>
                    <br />
                    <li>
                        Coordination : L'équipe doit coordonner avec les autres
                        équipes pour planifier le démontage de l'équipement
                        technique, en veillant à ce que les étapes de démontage
                        soient effectuées de manière ordonnée.
                    </li>
                    <br />
                    <li>
                        Démontage : L'équipe doit démonter tous les équipements
                        techniques, y compris les câbles, les structures, les
                        écrans, les haut-parleurs, etc., en veillant à ce qu'ils
                        soient stockés correctement pour une utilisation future.
                    </li>
                    <br />
                    <li>
                        Nettoyage : L'équipe doit s'assurer que tous les
                        déchets, les câbles et les éléments de l'équipement
                        technique sont ramassés et que le site est laissé propre
                        et en bon état après le départ des participants.
                    </li>
                    <br />
                </ul>
            </Text>
            <br />
            <br />
            <h4>Comité environnemental</h4>
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
                        Inspection : L'équipe doit inspecter régulièrement les
                        différentes zones du festival pour vérifier que les
                        participants respectent les règles environnementales et
                        ne laissent pas de déchets sur le site. Ils doivent
                        surveiller les zones de stationnement, les aires de
                        restauration, les toilettes, les espaces de
                        divertissement et tout autre lieu où les participants
                        pourraient laisser des déchets.
                    </li>
                    <br />
                    <li>
                        Nettoyage : Si l'équipe constate que des déchets ont été
                        laissés sur le site, elle doit prendre des mesures
                        immédiates pour nettoyer les zones concernées. Ils
                        doivent veiller à ce que les déchets soient triés
                        correctement et éliminés de manière responsable.
                    </li>
                    <br />
                    <li>
                        Éducation : L'équipe peut aider à sensibiliser les
                        participants sur l'importance de respecter
                        l'environnement en distribuant des informations sur les
                        règles et les pratiques environnementales appropriées.
                        Ils peuvent également fournir des conseils sur le tri
                        des déchets et l'utilisation de produits recyclables.
                    </li>
                    <br />
                    <li>
                        Planification : Avant l'événement, l'équipe doit
                        travailler avec les organisateurs pour planifier
                        l'emplacement des poubelles et des installations de tri
                        des déchets. Ils peuvent également aider à planifier les
                        efforts de nettoyage après l'événement pour s'assurer
                        que tous les déchets sont collectés et traités de
                        manière responsable.
                    </li>
                    <br />
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
                        Concevoir les jeux : L'équipe devra concevoir des jeux
                        amusants et attractifs pour les participants. Ils
                        devront prendre en compte l'âge des joueurs, leur niveau
                        de compétence et leur intérêt.
                    </li>
                    <br />
                    <li>
                        Acheter les fournitures : L'équipe devra acheter tous
                        les fournitures nécessaires pour les jeux, y compris les
                        prix à gagner. Ils devront également s'assurer que les
                        jeux et les fournitures sont en bon état de
                        fonctionnement.
                    </li>
                    <br />
                    <li>
                        Installer les jeux : L'équipe devra installer les jeux
                        sur le site du festival en utilisant des normes de
                        sécurité appropriées. Ils devront également s'assurer
                        que les jeux sont bien placés et faciles d'accès pour
                        les participants.
                    </li>
                    <br />
                    <li>
                        Surveiller les jeux : L'équipe devra surveiller les jeux
                        pour s'assurer qu'ils sont joués en toute sécurité et de
                        manière équitable. Ils devront également aider les
                        participants à comprendre les règles des jeux et à
                        répondre à toutes les questions qu'ils pourraient avoir.
                    </li>
                    <br />
                    <li>
                        Distribuer les prix : L'équipe devra distribuer les prix
                        aux participants qui ont réussi à gagner les jeux. Ils
                        devront également s'assurer que les prix sont distribués
                        équitablement et que chaque participant reçoit son prix.
                    </li>
                    <br />
                    <li>
                        Démonter les jeux : Après la fin du festival, l'équipe
                        devra démonter les jeux et ranger les fournitures. Ils
                        devront également s'assurer que le site est laissé
                        propre et en bon état.
                    </li>
                    <br />
                </ul>
            </Text>
            <br />
            <br />
            <h4>Comité des ateliers</h4>
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
                        Planification : Les organisateurs d'atelier doivent
                        planifier à l'avance les détails de leur atelier, tels
                        que le sujet, la durée, les fournitures nécessaires et
                        l'emplacement de l'atelier sur le site du festival.
                    </li>
                    <br />
                    <li>
                        Préparation : Les organisateurs doivent préparer leur
                        atelier avant l'heure prévue. Ils doivent s'assurer
                        d'avoir tous les outils et fournitures nécessaires,
                        d'avoir configuré l'espace de manière appropriée, et
                        d'être prêt à accueillir les participants.
                    </li>
                    <br />
                    <li>
                        Animer l'atelier : Les organisateurs doivent animer leur
                        atelier de manière à ce que les participants comprennent
                        bien les instructions et la façon de procéder. Ils
                        doivent s'assurer que les participants sont engagés et
                        qu'ils suivent correctement les étapes de l'atelier.
                    </li>
                    <br />
                    <li>
                        Respecter les règles du festival : Les organisateurs
                        doivent respecter les règles et les directives du
                        festival et s'assurer que leur atelier est compatible
                        avec le thème et l'esprit de l'événement.
                    </li>
                    <br />
                    <li>
                        Nettoyage : Après l'atelier, les organisateurs doivent
                        nettoyer l'espace utilisé et s'assurer que tous les
                        outils et fournitures sont remis en ordre.
                    </li>
                </ul>
            </Text>
            <br />
            <br />
            <h4>Comité alimentaire</h4>
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
                        Planifier le menu : L'équipe devra concevoir un menu
                        varié et adapté aux goûts des participants. Ils devront
                        également prendre en compte les allergies et les
                        restrictions alimentaires, ainsi que la disponibilité
                        des ingrédients.
                    </li>
                    <br />
                    <li>
                        Acheter les ingrédients : L'équipe devra se procurer
                        tous les ingrédients nécessaires à la préparation des
                        plats. Ils devront s'assurer de la qualité et de la
                        fraîcheur des produits, ainsi que de leur quantité
                        suffisante pour satisfaire les besoins des participants.
                    </li>
                    <br />
                    <li>
                        Préparer les plats : L'équipe devra préparer les plats
                        avec soin et en respectant les normes d'hygiène
                        alimentaire. Ils devront travailler rapidement et
                        efficacement pour préparer les quantités nécessaires de
                        nourriture pour les participants.
                    </li>
                    <br />
                    <li>
                        Servir la nourriture : L'équipe devra servir la
                        nourriture de manière efficace et organisée. Ils devront
                        être prêts à gérer des files d'attente importantes.
                    </li>
                    <br />
                    <li>
                        Nettoyer : Après la fin du service, l'équipe devra
                        nettoyer les équipements. Ils devront également
                        s'assurer que les déchets sont correctement triés et
                        éliminés.
                    </li>
                </ul>
            </Text>
            <br />
            <br />
        </>
    );
}
