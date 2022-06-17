import React from "react";
// import Button from "../../public/assets/Button";
import logo from "../pages/logo192.png";
import { Link } from "react-router-dom";
// import "src/navigation/css/Button.css";
import "./Navigation.css";
export default function Navigation() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt="logo" style={{ height: 50, width: 50 }}></img>
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
              to="/bookings"
              className="nav-links "
              style={{
                paddingTop: "3px",
                paddingBottom: "4px",
                marginTop: "11px",
              }}
            >
              Bookings
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
              Data
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
