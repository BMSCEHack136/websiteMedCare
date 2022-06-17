import { Button } from "@mui/material";
import React, { useState } from "react";
import Login from "../../Common/Login";
import { GlobalContext } from "../../GlobalData";
// import "../Beds/style.css";
import "../Schedule/Schedule.css";

export default function Schedule() {
  const { HospitalId } = React.useContext(GlobalContext);

  if (HospitalId === "") return <Login />;
  else {
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
              <tr>
                <td>-</td>
                <td> -</td>
                <td>-</td>
                <td>-</td>
                <td>
                  <Button type="button">confirm</Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h1 style={{}}>Past Appointments</h1>
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
              <tr>
                <td>-</td>
                <td> -</td>
                <td>-</td>
                <td>-</td>
                <td>Done</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
