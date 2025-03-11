import { Button, FrameBox, FrameLines } from "@arwes/core";
import { Link } from "@remix-run/react";

export default function Billetterie() {
  return (
    <>
      <Link to="/">
        <Button palette="primary">Retour au portail</Button>
      </Link>
      <br />
      <br />
      <h3>Billetterie </h3>
      <br />
      <br />

      <div
        style={{
          position: "relative",
          overflow: "hidden",
          height: "800px",
          width: "100%",
          paddingTop: "500px",
        }}
      >
        <iframe
          title="Donation form powered by Zeffy"
          style={{
            position: "absolute",
            border: 0,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            width: "100%",
            height: "100%",
          }}
          src="https://www.zeffy.com/embed/ticketing/tipi-festival-v"
          allow="payment"
          allowTransparency={true}
        ></iframe>
      </div>
    </>
  );
}
