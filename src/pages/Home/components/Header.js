import React from "react";

export default function Header() {
  return (
    <div style={{}}>
      <section style={{ marginBottom: "4%" }}>
        <div>
          <h1
            style={{
              marginTop: "10%",
              marginBottom: "-1%",
              textAlign: "center",
              color: "black",
              fontSize: "6em",
              fontFamily: "Montserrat",
            }}
          >
            MedCare
          </h1>
          <p
            style={{
              textAlign: "center",
              color: "black",
              letterSpacing: "0.5px",
            }}
          >
            Providing Solutions To Hospitals
          </p>
        </div>
      </section>
    </div>
  );
}
