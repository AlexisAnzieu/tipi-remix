import { Text, Button, FrameHexagon } from "@arwes/core";
import { Form } from "remix";

export default function Auth() {
    return (
        <>
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
                    Vous devez être un membre de la communauté galactique pour
                    pouvoir devenir mercenaire. Si vous n'avez pas accès à
                    <a href="https://www.facebook.com/events/688738495481100">
                        {" "}
                        cet événement{" "}
                    </a>
                    cela signifie que vous n'en faites malheureusement pas
                    partie.
                </Text>
            </FrameHexagon>

            <div
                style={{
                    marginTop: "50px",
                }}
            >
                <Form action={"/auth/facebook"} method="post">
                    <Button animator={{ activate: true }}>
                        <Text>Devenir mercenaire</Text>
                    </Button>
                </Form>
            </div>
        </>
    );
}
