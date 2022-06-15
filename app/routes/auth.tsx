import {
    Text,
    Button,
    FrameHexagon,
    LoadingBars,
    FrameCorners,
} from "@arwes/core";
import { Form } from "remix";

export default function Auth({ users }: any) {
    return (
        <>
            <center>
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
                        L'inscription à la liste des mercenaires est maintenant
                        clôturée.
                    </Text>
                </FrameHexagon>
            </center>
            <br />
            <br />
            <div
                style={{
                    fontSize: 30,
                    marginTop: "15px",
                    textAlign: "center",
                }}
            >
                <Form action={"/auth/facebook"} method="post">
                    <Button
                        FrameComponent={FrameCorners}
                        animator={{ activate: true }}
                    >
                        <Text>Se connecter à Facebook</Text>
                    </Button>
                </Form>
            </div>
            {/* <div
                style={{
                    marginTop: "15px",
                    textAlign: "center",
                }}
            >
                <Form action={"/auth/google"} method="post">
                    <Button
                        FrameComponent={FrameCorners}
                        animator={{ activate: true }}
                    >
                        <Text>par Google - en test</Text>
                    </Button>
                </Form>
            </div> */}
        </>
    );
}
