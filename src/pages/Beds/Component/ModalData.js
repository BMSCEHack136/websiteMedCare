import React, { useState } from "react";

export default function ModalData({ p_id }) {
  console.log("piddd");

  const patientInfoUrl = `https://exlfit6t23.execute-api.us-east-1.amazonaws.com/ver1/patientinfo?id=${"yash682453"}`;

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

  if (info === "") return <div>add patient</div>;
  else {
    return (
      <div>
        <h1 style={{ marginBottom: "5%" }}> name : {info["Name"]}</h1>
        <div style={{ textAlign: "left" }}>
          <h5>id : {p_id}</h5>
          <hr></hr>
          <h5>gender : {info["Gender"]}</h5>
          <hr></hr>
          <h5>age : {info["Age"]}</h5>
          <hr></hr>
          <h5>BloodGroup : {info["BloodGroup"]}</h5>
        </div>
      </div>
    );
  }
}
