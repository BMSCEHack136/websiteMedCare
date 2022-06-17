import { adaptV4Theme, Button } from "@mui/material";
import React, { useState } from "react";
import Login from "../../Common/Login";
import { GlobalContext } from "../../GlobalData";
// import "../Beds/style.css";
import "../Schedule/Schedule.css";

export default function Schedule() {
  const { HospitalId } = React.useContext(GlobalContext);

  const [appt, setAppt] = React.useState("null");

  async function fetchUrl() {
    let res = await fetch(
      `https://exlfit6t23.execute-api.us-east-1.amazonaws.com/ver1/app-log?id=${HospitalId}`
    );
    let data = await res.json();
    setAppt(data);
  }

  React.useEffect(() => {
    fetchUrl();
  }, [HospitalId]);

  if (HospitalId === "") return <Login />;
  else if (appt == "null") return <div>loading</div>;
  else {
    console.log(appt["data"], "hii");
    return (
      <div class="card">
        <h1 style={{ fontSize: "50px" }}>Appointments</h1>
        <hr style={{ marginBottom: "5%" }} />
        <h1 style={{}}>Upcoming Appointments</h1>
        <div class="card2">
          <table class="content-table">
            <thead>
              <tr>
                <th>Patient_id</th>
                <th>Name</th>
                <th>Date/Time</th>
                <th>Phone</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {appt["data"].map((row) => {
                return <>{row.resolve === "0" && <Row data={row} />}</>;
                // console.log(row,'hiii')
              })}
            </tbody>
          </table>
        </div>
       
      </div>
    );
  }
}

const Row = ({ data }) => {
  return (
    <tr>
      <td>{data.Patient_id}</td>
      <td>-</td>
      <td>
        {data.Date} {data.Time}
      </td>
      <td>-</td>
      <td>
        <Button type="button">Pending</Button>
      </td>
    </tr>
  );
};