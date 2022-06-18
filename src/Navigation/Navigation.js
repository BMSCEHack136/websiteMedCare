import React, { useContext } from "react";
// import Button from "../../public/assets/Button";
import logo from "./logo.png";
import { Link } from "react-router-dom";
// import "src/navigation/css/Button.css";
import "./Navigation.css";
import { Button } from "@mui/material";
import { blue } from "@mui/material/colors";
import { GlobalContext } from "../GlobalData";
export default function Navigation() {
  const { setHospitaId } = useContext(GlobalContext);
  return (
    <div>
      <nav className="navbar">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            style={{ height: 88, width: 88, marginTop: "1.2em" }}
          ></img>
        </Link>
        <span className="spaceSymbol"></span>
        <ul className={"nav-menu"}>
          {/*  */}
          <li className="nav-item">
            <Link
              to="/"
              className="nav-links"
              style={{
                paddingTop: "3px",
                paddingBottom: "4px",
                marginTop: "11px",
              }}
            >
              Home
            </Link>
          </li>
          {/*  */}
          <li className="nav-item">
            <Link
              to="/beds"
              className="nav-links "
              style={{
                paddingTop: "3px",
                paddingBottom: "4px",
                marginTop: "11px",
              }}
            >
              Beds
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/schedule"
              className="nav-links "
              style={{
                paddingTop: "3px",
                paddingBottom: "4px",
                marginTop: "11px",
              }}
            >
              Appointments
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/data"
              className="nav-links "
              style={{
                paddingTop: "3px",
                paddingBottom: "4px",
                marginTop: "11px",
              }}
            >
              About Us
            </Link>
          </li>
        </ul>
        <li className="nav-item">
          <Link
            to="/home"
            className="nav-links "
            style={{
              paddingTop: "3px",
              paddingBottom: "4px",
              marginTop: "11px",
            }}
          >
            <Button
              onClick={() => setHospitaId("")}
              type="submit"
              style={{
                color: "white",
                backgroundColor: "rgb(56, 56, 56)",
                borderRadius: "20px",
                width: "90px",
                height: "40px",
              }}
            >
              Log out
            </Button>
          </Link>
        </li>
      </nav>
    </div>
  );
}
