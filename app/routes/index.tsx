import {
    Text,
    FrameHexagon,
    Blockquote,
    Button,
    FrameUnderline,
} from "@arwes/core";
import Auth from "./auth";
import { useState, useEffect } from "react";
import { supabase } from "~/utils/supabaseClient";
import wallpaper from "~/images/wallpaper.jpeg";
import { Session } from "@supabase/supabase-js";
import { Link, useLoaderData } from "remix";
import { getMembers, setUserPermissionType } from "~/utils/auth";

export const loader = async () => {
    const members = await getMembers();
    return { members };
};

export default function Index() {
    const [session, setSession] = useState<Session | null>(null);
    const { members } = useLoaderData();
    let userPermissionType = setUserPermissionType(session, members);

    useEffect(() => {
        setSession(supabase.auth.session() as any);
        supabase.auth.onAuthStateChange((_event, s: Session | null) => {
            setSession(s);
            userPermissionType = setUserPermissionType(session, members);
        });
    }, []);

    return (
        <>
            <h1>PORTAIL INTERGALACTIQUE</h1>

            {userPermissionType === "NONE" && <Auth />}

            {userPermissionType === "INVALID_MEMBER" && (
                <>
                    <Blockquote palette="error">
                        <Text>
                            {`${session?.user?.user_metadata.name} ne correspond à aucun nom figurant sur notre liste de mercenaires. Veuillez nous excuser pour la gène occasionnée.`}
                        </Text>
                    </Blockquote>
                </>
            )}

            {userPermissionType === "MEMBER_NO_PAID" && (
                <Blockquote palette="secondary">
                    <Text>
                        {`${session?.user?.user_metadata.name} figure bien sur notre liste des mercenaires mais les frais n'ont pas encore été acquitté.`}
                        <br /> <br />
                        Pour ce faire, veuillez envoyer 80$ à l'adresse interrac
                        suivante: alexis.anzieu@gmail.com en indiquant votre
                        nom.
                    </Text>
                </Blockquote>
            )}

            {userPermissionType === "MEMBER_PAID" && (
                <>
                    <Link to={`/profile/${session?.user?.user_metadata.slug}`}>
                        <Button FrameComponent={FrameUnderline}>
                            Mon profil
                        </Button>
                    </Link>
                    <br />
                    <Link to="/members">
                        <Button FrameComponent={FrameUnderline}>
                            Liste des mercenaires
                        </Button>
                    </Link>
                    <br />
                    <br />
                    <FrameHexagon
                        animator={{
                            duration: {
                                enter: 1000,
                            },
                            activate: true,
                        }}
                        hover
                    >
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
                            En 1950, la comète Normand1LX32 s’est écrasée en
                            Lanaudière, sectionnant une montagne en deux. Le
                            lieu de l’impact devient mystérieusement un lieu de
                            passage et d'étranges apparitions ont lieu. Depuis
                            lors, de nombreux scientifiques ont tenté de
                            résoudre l’énigme de cette montagne coupée, en vain.
                            200 ans plus tard, une escouade de quatre érudits
                            professionnels est envoyée sur place mais toute
                            communication est perdue avec eux. Cependant, des
                            fréquences de 50hz à 20kHz se font entendre dans
                            toute la vallée... Une prime de 2 millions de tipiz
                            (tpz) est offerte à ceux qui lèveront le voile sur
                            cette étrange phénomène.
                        </Text>
                    </FrameHexagon>
                    <br />
                    <br />

                    <img
                        style={{
                            paddingTop: "50px",
                        }}
                        src={wallpaper}
                        alt="A nebula"
                    />
                </>
            )}
        </>
    );
}
