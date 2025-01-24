import { Text, FrameHexagon, Button, FrameUnderline } from "@arwes/core";
import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Text
        animator={{
          duration: {
            enter: 6000,
            exit: 1000,
          },
          activate: true,
        }}
        style={{
          fontSize: "3.5em",
          textAlign: "center",
          marginBottom: "0.5em",
          color: "#40ffff",
          textShadow: "0 0 10px #40ffff",
          fontWeight: "bold",
          letterSpacing: "4px",
        }}
      >
        NOUVELLE MISSION ANNONCÉE
      </Text>
      <Text
        animator={{
          duration: {
            enter: 6000,
            exit: 1000,
          },
          activate: true,
        }}
        style={{
          fontSize: "2em",
          textAlign: "center",
          marginBottom: "1.5em",
          color: "#40ffff",
          textShadow: "0 0 10px #40ffff",
          fontWeight: "bold",
          letterSpacing: "4px",
        }}
      >
        20-22 JUIN
      </Text>
      <FrameHexagon
        animator={{
          duration: {
            enter: 1000,
          },
          activate: true,
        }}
        hover
        palette="primary"
        style={{
          borderRadius: "8px",
          padding: "2px",
          maxWidth: "800px",
        }}
      >
        <Text
          animator={{
            duration: {
              enter: 3000,
              exit: 1000,
            },
            activate: true,
          }}
          style={{
            fontSize: "1.4em",
            textAlign: "center",
            padding: "2.5em",
            background: "rgba(0, 0, 0, 0.7)",
            color: "#40ffff",
            textShadow: "0 0 5px #40ffff",
            borderRadius: "6px",
            lineHeight: "1.6",
          }}
        >
          ATTENTION VOYAGEURS! Une nouvelle mission d'exploration temporelle est
          prévue. Préparez-vous pour le prochain voyage. Plus de détails seront
          révélés bientôt...
        </Text>
      </FrameHexagon>
    </div>
  );
}
