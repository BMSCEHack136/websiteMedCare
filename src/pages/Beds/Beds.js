import React, { useState } from "react";
import "../Beds/style.css";
import { GlobalContext } from "../../GlobalData";
import Login from "../../Common/Login";
import "../Beds/style.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ModalData from "./Component/ModalData";

export default function Beds() {
  const { HospitalId } = React.useContext(GlobalContext);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    border: "2px solid #000",
    height: 400,
    boxShadow: 24,
    p: 4,
  };

  const URL =
    "https://exlfit6t23.execute-api.us-east-1.amazonaws.com/ver1/bed-details?id=SATY971552";

  const [bedData, setBedData] = useState("null");
  const [visible, setVisible] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState("");

  async function fetchUrl() {
    let res = await fetch(URL);
    let data = await res.json();
    setBedData(data["data"][0]);
  }

  React.useEffect(() => {
    fetchUrl();
  }, [HospitalId]);

  console.log("Bed", bedData);

  if (HospitalId === "") return <Login />;
  else if (bedData == "null") return <div>loading</div>;
  else {
    return (
      <div>
        <Modal
          open={visible}
          onClose={() => {
            setVisible(false);
          }}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <ModalData p_id={selectedPatient} />
          </Box>
        </Modal>
        <body style={{ alignText: "center" }}>
          <h1 style={{ marginTop: "5%", fontSize: "50px", marginBottom: "3%" }}>
            Beds Availability
          </h1>
          <h2 style={{ marginTop: "100" }}>ICU</h2>
          <div style={{ marginTop: 1, marginLeft: "25%" }} className="row">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((col, ind) => {
              return (
                <Bed
                  data={bedData["icu"]}
                  ind={col}
                  selectedPatient={setSelectedPatient}
                  funct={setVisible}
                  type="ICU"
                />
              );
            })}
          </div>
          <div className="row" style={{ marginTop: 1, marginLeft: "25%" }}>
            {[8, 9, 10, 11, 12, 13, 14, 15].map((col, ind) => {
              return (
                <Bed
                  data={bedData["icu"]}
                  ind={col}
                  selectedPatient={setSelectedPatient}
                  funct={setVisible}
                  type="ICU"
                />
              );
            })}
          </div>
          <hr style={{ width: "40%", marginLeft: "30%" }} />
          <h2 style={{ marginTop: 10, marginTop: "3%" }}>GENERAL BED</h2>
          <div style={{ marginLeft: "25%" }} className="container">
            <div className="row">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((col, ind) => {
                return (
                  <Bed
                    data={bedData["general"]}
                    ind={col}
                    selectedPatient={setSelectedPatient}
                    funct={setVisible}
                    type="genral"
                  />
                );
              })}
            </div>

            <div className="row">
              {[8, 9, 10, 11, 12, 13, 14, 15].map((col, ind) => {
                return (
                  <Bed
                    data={bedData["general"]}
                    ind={col}
                    selectedPatient={setSelectedPatient}
                    funct={setVisible}
                    type="genral"
                  />
                );
              })}
            </div>

            <div className="row">
              {[16, 17, 18, 19, 20, 21, 22, 23].map((col, ind) => {
                return (
                  <Bed
                    data={bedData["general"]}
                    ind={col}
                    selectedPatient={setSelectedPatient}
                    funct={setVisible}
                    type="genral"
                  />
                );
              })}
            </div>

            <div className="row">
              {[24, 25, 26, 27, 28, 29, 30, 31].map((col, ind) => {
                return (
                  <Bed
                    data={bedData["general"]}
                    ind={col}
                    selectedPatient={setSelectedPatient}
                    funct={setVisible}
                    type="genral"
                  />
                );
              })}
            </div>
          </div>
        </body>
      </div>
    );
  }
}

const Bed = ({ data, ind, type, funct, selectedPatient }) => {
  let _key = ind.toString() + type;

  return (
    <div
      onClick={() => {
        funct(true);
        selectedPatient(data[_key]);
      }}
      style={{
        backgroundColor: data[_key] === "None" ? "#444451" : "red",
        height: "50px",
        width: "55px",
        margin: "10px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
      }}
    ></div>
  );
};
