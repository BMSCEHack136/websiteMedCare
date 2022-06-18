import React from "react";
import image1 from "../Assets/picture1.jpg";

export default function Header() {
  return (
<<<<<<< HEAD
    <div>
=======
    <div style={{ backgroundImage: { image1 } }}>
>>>>>>> 4fc7e2e0dcdbaa02e61d5fa9cbcca005bfd2077b
      <section style={{ marginBottom: "4%" }}>
        <div>
          <h1
            style={{
              marginTop: "4%",
              marginBottom: "1%",
              textAlign: "center",
              color: "black",
              fontSize: "6em",
              textShadow: "2px 2px #a9a9a9",
              // color: "#00b5e2",
              // fontFamily: "Montserrat",
            }}
          >
            MedCare
          </h1>
          <h3
            style={{
              textAlign: "center",
              color: "black",
              letterSpacing: "0.1em",
              marginBottom: "-8%",
            }}
          >
            Analyse &#x2022; Identify &#x2022; Connect
          </h3>
        </div>
      </section>
    </div>
  );
}
