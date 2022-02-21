import {
    ArwesThemeProvider,
    StylesBaseline,
    Text,
    FrameHexagon,
    Blockquote,
    Button,
} from "@arwes/core";
import { AnimatorGeneralProvider } from "@arwes/animation";
import { BleepsProvider } from "@arwes/sounds";
import Auth from "./auth";
import { useState, useEffect } from "react";
import { supabase } from "~/utils/supabaseClient";
import wallpaper from "~/images/wallpaper.jpeg";
import { Session } from "@supabase/supabase-js";
import { useLoaderData, useNavigate } from "remix";
import getMembers from "./api/getMembers";
import { setUserPermissionType } from "~/utils/auth";

const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';
const FONT_FAMILY_CODE = '"Source Code Pro", monospace';
const SOUND_READOUT_URL = "/assets/sounds/readout.mp3";

const audioSettings = { common: { volume: 0.25 } };
const playersSettings = { readout: { src: [SOUND_READOUT_URL], loop: true } };
const bleepsSettings = { readout: { player: "readout" } };
const animatorGeneral = {
    duration: { enter: 200, exit: 200, stagger: 30 },
};

const extractMembers = (table: any) => {
    return table.map((row: any) => ({
        name: `${row.properties.firstName.title[0].plain_text} ${
            row.properties.lastName.rich_text[0]?.plain_text || ""
        }`,
        hasPaid: row.properties.hasPaid.checkbox,
    }));
};

export const loader = async () => {
    return getMembers();
};

export default function Index() {
    const [session, setSession] = useState<Session | null>(null);
    const navigate = useNavigate();
    const membersTable = useLoaderData();
    const extractedMembers = extractMembers(membersTable);
    let userPermissionType = setUserPermissionType(session, extractedMembers);

    useEffect(() => {
        setSession(supabase.auth.session() as any);
        supabase.auth.onAuthStateChange((_event, s: Session | null) => {
            setSession(s);
            userPermissionType = setUserPermissionType(session, membersTable);
        });
    }, []);

    return (
        <ArwesThemeProvider>
            <BleepsProvider
                audioSettings={audioSettings}
                playersSettings={playersSettings}
                bleepsSettings={bleepsSettings}
            >
                <StylesBaseline
                    styles={{
                        "html, body": {
                            fontFamily: FONT_FAMILY_ROOT,
                            padding: "20px",
                        },
                        "code, pre": { fontFamily: FONT_FAMILY_CODE },
                    }}
                />
                <AnimatorGeneralProvider animator={animatorGeneral}>
                    <h1>PORTAIL INTERGALACTIQUE</h1>

                    {userPermissionType === "NONE" && <Auth />}

                    {userPermissionType === "INVALID_MEMBER" && (
                        <Blockquote palette="error">
                            <Text>
                                {`${session?.user?.user_metadata.name} ne correspond à aucun nom figurant sur notre liste de mercenaires. Veuillez nous excuser pour la gène occasionnée.`}
                            </Text>
                        </Blockquote>
                    )}

                    {userPermissionType === "MEMBER_NO_PAID" && (
                        <Blockquote palette="secondary">
                            <Text>
                                {`${session?.user?.user_metadata.name} figure bien sur notre liste des mercenaires mais les frais n'ont pas encore été acquitté.`}
                                <br /> <br />
                                Pour ce faire, veuillez envoyer 80$ à l'adresse
                                interrac suivante: alexis.anzieu@gmail.com en
                                indiquant votre nom.
                            </Text>
                        </Blockquote>
                    )}

                    {userPermissionType === "MEMBER_PAID" && (
                        <>
                            <Text
                                animator={{
                                    duration: {
                                        enter: 1000,
                                    },
                                    activate: true,
                                }}
                            >
                                <Blockquote>
                                    <Text>
                                        {`À l'attention de ${session?.user?.user_metadata.name}`}
                                    </Text>
                                </Blockquote>
                            </Text>
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
                                            enter: 10000,
                                            exit: 1000,
                                        },
                                        activate: true,
                                    }}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                    }}
                                >
                                    En 1950, la comète Normand1LX32 s’est
                                    écrasée en Lanaudière, sectionnant une
                                    montagne en deux. Le lieu de l’impact
                                    devient mystérieusement un lieu de passage
                                    et d'étranges apparitions ont lieu. Depuis
                                    lors, de nombreux scientifiques ont tenté de
                                    résoudre l’énigme de cette montagne coupée,
                                    en vain. 200 ans plus tard, une escouade de
                                    quatre érudits professionnels est envoyée
                                    sur place mais toute communication est
                                    perdue avec eux. Cependant, des fréquences
                                    de 50hz à 20kHz se font entendre dans toute
                                    la vallée... Une prime de 2 millions de
                                    tipiz (tpz) est offerte à ceux qui lèveront
                                    le voile sur cette étrange phénomène.
                                </Text>
                            </FrameHexagon>
                            <br />
                            <br />
                            <Button
                                FrameComponent={FrameHexagon}
                                onClick={() => navigate("/members")}
                                animator={{ activate: true }}
                            >
                                <Text>Liste des mercenaires</Text>
                            </Button>

                            <img
                                style={{
                                    paddingTop: "50px",
                                }}
                                src={wallpaper}
                                alt="A nebula"
                            />
                        </>
                    )}
                </AnimatorGeneralProvider>
            </BleepsProvider>
        </ArwesThemeProvider>
    );
}
