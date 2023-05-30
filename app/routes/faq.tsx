import { Button, Text } from "@arwes/core";
import { Link } from "@remix-run/react";

export default function Faq() {
    return (
        <>
            <Link to="/">
                <Button palette="primary">Retour au portail</Button>
            </Link>
            <br />
            <br />
            <h1>Centre d'information galactique </h1>
            <br />
            <h6>Combien coûte l'entrée?</h6>
            <hr />
            <Text>
                L'entrée est au tarif unique de 100$. Il comprend l'entrée au
                festival, le camping sur place durant les deux jours et le diner
                du samedi soir. Il n'y a pas de demi-tarif pour une journée
                seule.
            </Text>
            <br />
            <br />
            <br />
            <h6>À quel endroit le campement est-il établi?</h6>
            <hr />
            <Text>
                Le campement est situé à 1h10 de Montréal,{" "}
                <Link to="https://www.facebook.com/Les-Tipis-du-Sommet-314400425247270">
                    aux Tipis du Sommet
                </Link>
                . Étant perché sur une colline, l'accès n'est possible qu'en
                voiture tout-terrain. Il est en revanche possible de se garer à
                un parkling prevu à cet effet et d'entamer une marche d'une
                dizaine de minutes pour rejoindre le campement. <br /> <br />
                Une navette sera mise à disposition des festivaliers le vendredi
                afin d'acheminer le matériel de camping, cette dernière passera
                à 3 reprises: 17h, 19h puis 20h30.
            </Text>
            <br />
            <br />
            <br />
            <h6>Peux t-on dormir dans les tipis?</h6>
            <hr />
            <Text>
                Oui, un planning sera mis en place quelques jours avant le début
                de l'événement afin de permettre aux festivaliers de réserver
                une place en tipi pour les deux nuits. Cela n'a pas d'impact sur
                le prix du billet.
            </Text>
            <br />
            <br />
            <br />
            <h6>Peux t-on participer à plusieurs comités en même temps?</h6>
            <hr />
            <Text>
                Oui, si tu as le temps et l'énergie! Il n'y a pas de limite au
                nombre de comités dans lesquels tu peux participer.
            </Text>
            <br />
            <br />
            <br />
            <h6>Puis-je inviter mes amis?</h6>
            <hr />
            <Text>
                Quelques semaines avant le début de l'événement et s'il reste
                des places, nous ouvrirons la billetterie au grand public. Si tu
                souhaites inviter des amis, tu pourras ainsi leur envoyer le
                lien vers le site web.
            </Text>
            <br />
            <br />
            <br />
            <h6>Pourquoi se limiter à 100 personnes?</h6>
            <hr />
            <Text>
                Le but de cet événement est rassembler un groupe restreint de
                personnes autour d'un thème commun pour créer des liens, des
                échanges et des expériences mémorables. Augmenter le nombre de
                participants aurait pour effet de réduire la qualité de
                l'expérience.
            </Text>
            <br />
            <br />
            <br />
            <h6>Mon billet est-il remboursable?</h6>
            <hr />
            <Text>
                Notre trésorie étant limitée, nous n'avons malheureusement pas
                la capacité de rembourser les participants qui ne souhaiteraient
                plus venir pour cause de mauvais temps ou autres raisons
                personnelles.
            </Text>
            <br />
            <br />
            <br />
            <h6>Mon billet est-il transférable?</h6>
            <hr />
            <Text>
                Vous pouvez transférer votre billet à une autre personne si vous
                ne pouvez plus venir. Pour cela, il vous suffit de nous
                contacter sur Facebook en amont.
            </Text>
            <br />
            <br />
            <br />
            <h6>Le festival sera t-il maintenu en cas d'intempéries?</h6>
            <hr />
            <Text>
                Oui, le festival aura lieu qu'il pleuve ou qu'il vente. Nous
                avons prévu de quoi vous abriter en cas de pluie. Prenez
                cependant des serviettes et des vêtements chauds au cas où.
            </Text>
        </>
    );
}
