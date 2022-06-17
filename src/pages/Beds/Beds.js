import React, { useState } from "react";
// import "../Beds/style.css";

export default function Beds() {
  // const l = [1, 7, 9, 10, 30, 35];

  // for (var i of l) {
  //   document.getElementById(i).classList.add("occupied");
  // }

  return (
    <div>
      <body>
        <h4 style={{ marginTop: 100, marginLeft: "48%" }}>ICU</h4>
        <div style={{ marginTop: 1, marginLeft: "35%" }} className="row">
          <div className="seat" id="1"></div>
          <div className="seat" id="2"></div>
          <div className="seat" id="3"></div>
          <div className="seat" id="4"></div>
          <div className="seat" id="5"></div>
          <div className="seat" id="6"></div>
          <div className="seat" id="7"></div>
          <div className="seat" id="8"></div>
        </div>
        <hr style={{ width: "40%" }} />
        <h4 style={{ marginTop: 10, marginLeft: "46%" }}>GENERAL BED</h4>
        <div style={{ marginLeft: "35%" }} className="container">
          <div className="row">
            <div className="seat" id="9"></div>
            <div className="seat" id="10"></div>
            <div className="seat" id="11"></div>
            <div className="seat occupied " id="12"></div>
            <div className="seat occupied" id="13"></div>
            <div className="seat" id="14"></div>
            <div className="seat" id="15"></div>
            <div className="seat" id="16"></div>
          </div>

          <div className="row">
            <div className="seat" id="17"></div>
            <div className="seat" id="18"></div>
            <div className="seat" id="19"></div>
            <div className="seat" id="20"></div>
            <div className="seat" id="21"></div>
            <div className="seat" id="22"></div>
            <div className="seat occupied" id="23"></div>
            <div className="seat occupied" id="24"></div>
          </div>

          <div className="row">
            <div className="seat" id="25"></div>
            <div className="seat" id="26"></div>
            <div className="seat" id="27"></div>
            <div className="seat" id="28"></div>
            <div className="seat" id="29"></div>
            <div className="seat" id="30"></div>
            <div className="seat" id="31"></div>
            <div className="seat" id="32"></div>
          </div>

          <div className="row">
            <div className="seat" id="33"></div>
            <div className="seat" id="34"></div>
            <div className="seat" id="35"></div>
            <div className="seat occupied" id="36"></div>
            <div className="seat occupied" id="37"></div>
            <div className="seat" id="38"></div>
            <div className="seat" id="39"></div>
            <div className="seat" id="40"></div>
          </div>

          <div className="row">
            <div className="seat" id="41"></div>
            <div className="seat" id="42"></div>
            <div className="seat" id="43"></div>
            <div className="seat" id="44"></div>
            <div className="seat occupied" id="45"></div>
            <div className="seat occupied" id="46"></div>
            <div className="seat occupied" id="47"></div>
            <div className="seat" id="50"></div>
          </div>
        </div>
      </body>
    </div>
  );
}
