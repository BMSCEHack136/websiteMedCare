import React from "react";
// import image1 from "../Assets/picture1.jpg";

export default function Header() {
  return (
    <div
    // style={{
    //   backgroundImage:
    //     "url('https://img.freepik.com/free-vector/abstract-background-small-squares-shades-white-colors_444390-7707.jpg?w=1060')",
    // }}
    >
      <section style={{ marginBottom: "4%" }}>
        <div
        // style={{
        //   backgroundImage:
        //     "url('https://img.freepik.com/free-vector/abstract-background-small-squares-shades-white-colors_444390-7707.jpg?w=1060')",
        // }}
        >
          <h1
            style={{
              marginTop: "4%",
              marginBottom: "1%",
              textAlign: "center",
              color: "black",
              fontSize: "6em",
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
