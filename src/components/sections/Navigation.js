import React from "react";
import logo from "../images/Logo.svg";

export default function Navigation() {
  return (
    <nav>
      <a href="#" alt="logo">
        {" "}
        <img src={logo} alt="logo" />
      </a>
    </nav>
  );
}
