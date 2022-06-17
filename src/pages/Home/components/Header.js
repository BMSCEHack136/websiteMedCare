import React from "react";

export default function Header() {
  return (
    <div style={{}}>
      <section style={{ marginBottom: "4%" }}>
        <div>
          <h1
            style={{
              marginTop: "10%",
              marginBottom: "1%",
              textAlign: "center",
              color: "black",
              fontSize: "6em",
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
            }}
          >
            Analyse &#x2022; Identify &#x2022; Connect &#x2022;
          </h3>
        </div>
      </section>
    </div>
  );
}
