import { Link } from "remix";
import {
    ArwesThemeProvider,
    StylesBaseline,
    Text,
    FrameHexagon,
    Blockquote,
} from "@arwes/core";
import { AnimatorGeneralProvider } from "@arwes/animation";
import { BleepsProvider } from "@arwes/sounds";

const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';
const FONT_FAMILY_CODE = '"Source Code Pro", monospace';
const SOUND_READOUT_URL = "/assets/sounds/readout.mp3";
const IMAGE_URL = "/images/wallpaper.jpeg";

const audioSettings = { common: { volume: 0.25 } };
const playersSettings = { readout: { src: [SOUND_READOUT_URL], loop: true } };
const bleepsSettings = { readout: { player: "readout" } };
const animatorGeneral = {
    duration: { enter: 200, exit: 200, stagger: 30 },
};

export default function Index() {
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
            <Link to="/posts">Posts</Link>

            <ArwesThemeProvider>
                <BleepsProvider
                    audioSettings={audioSettings}
                    playersSettings={playersSettings}
                    bleepsSettings={bleepsSettings}
                >
                    <StylesBaseline
                        styles={{
                            "html, body": { fontFamily: FONT_FAMILY_ROOT },
                            "code, pre": { fontFamily: FONT_FAMILY_CODE },
                        }}
                    />
                    <AnimatorGeneralProvider animator={animatorGeneral}>
                        <div style={{ margin: "20px" }}>
                            <h1>RÉCOMPENSE INTERGALACTIQUE</h1>

                            <>
                                <Text
                                    animator={{
                                        duration: {
                                            enter: 1000,
                                            exit: 1000,
                                        },
                                        activate: true,
                                    }}
                                >
                                    <Blockquote palette={"error"}>
                                        <Text>{`À l'attention de coucou`}</Text>
                                    </Blockquote>
                                </Text>
                                <FrameHexagon>
                                    <Text
                                        animator={{
                                            duration: {
                                                enter: 1000,
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
                                        écrasée sur en Lanaudière, sectionnant
                                        une montagne en deux. Le lieu de
                                        l’impact devient mystérieusement un lieu
                                        de passage d’animaux et attire toutes
                                        sortes d’hurluberlus. Depuis lors, de
                                        nombreux scientifiques ont tenté de
                                        résoudre l’énigme de cette montagne
                                        coupée, en vain. 200 ans plus tard une
                                        escouade de quatre érudits
                                        professionnels est envoyée sur place
                                        mais toute communication est perdue avec
                                        eux, cependant des fréquences de 50hz à
                                        20kHz se font entendre dans toute la
                                        vallée...Une prime de 2 millions de
                                        tipiz (tpz) est offerte a celle ou celui
                                        qui lèvera le voile sur cette étrange
                                        phénomène.
                                    </Text>
                                </FrameHexagon>

                                <img
                                    style={{
                                        paddingTop: "50px",
                                    }}
                                    src={IMAGE_URL}
                                    alt="A nebula"
                                />
                            </>
                        </div>
                    </AnimatorGeneralProvider>
                </BleepsProvider>
            </ArwesThemeProvider>
        </div>
    );
}
