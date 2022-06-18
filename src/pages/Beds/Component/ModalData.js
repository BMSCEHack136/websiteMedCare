import React, { useState } from "react";
import "../../Schedule/Schedule.css";
export default function ModalData({ p_id }) {
  console.log("piddd");

  const patientInfoUrl = `https://exlfit6t23.execute-api.us-east-1.amazonaws.com/ver1/patientinfo?id=${p_id}`;

  const [info, setInfo] = useState("");

  async function fetchUrl() {
    console.log("pid funct");
    let res = await fetch(patientInfoUrl);
    let data = await res.json();
    console.log(data["data"][0], "pid");
    setInfo(data["data"][0]);
  }

  React.useEffect(() => {
    fetchUrl();
  }, [p_id]);

  if (info === "")
    return (
      <>
        <body style={{ backgroundColor: "white" }}>
          <div style={{ marginLeft: "12%" }} className="wrapper">
            <div className="title-text">
              <div
                className="title login"
                style={{ fontSize: "15px", marginLeft: "-3%" }}
              >
                Admit
              </div>
            </div>
            <div style={{ textAlign: "center" }} className="form-container">
              <div className="form-inner">
                <form action="" method="post" className="login">
                  <div className="field">
                    <input type="text" placeholder="Patient_Name" required />
                  </div>
                  <div className="field">
                    <input type="number" placeholder="Age" required />
                  </div>
                  <div className="field">
                    <input type="text" placeholder="Blood_Group" required />
                  </div>

                  <div className="field">
                    <input type="submit" value="Allocate_Bed" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </body>
      </>
    );
  else {
    return (
      <div className="card">
        <div className="card2">
          <h1 style={{ marginBottom: "5%" }}> Name : {info["Name"]}</h1>
          <div style={{ textAlign: "justify", fontSize: "1.5em" }}>
            <h5 style={{ marginBottom: "2.5%" }}>Id : {p_id}</h5>
            {/* <hr style={{ width: "60%" }}></hr> */}
            <h5 style={{ marginBottom: "2.5%" }}>Gender : {info["Gender"]}</h5>
            <h5 style={{ marginBottom: "2.5%" }}>Age : {info["Age"]}</h5>
            <h5 style={{ marginBottom: "2.5%" }}>
              BloodGroup : {info["BloodGroup"]}
            </h5>
          </div>
        </div>
      </div>
    );
  }
}
