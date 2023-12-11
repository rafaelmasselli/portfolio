import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const linkStyle = { color: "#dedede", textDecoration: "none" };

export function Navbar() {
  return (
    <header className="container navbar">
      <nav>
        <p>Rafael Masselli</p>
      </nav>
      <nav>
        <ul className="container">
          <Link to="/" style={linkStyle}>
            <li>Home</li>
          </Link>
          <Link to="/" style={linkStyle}>
            <li>Work</li>
          </Link>
          <Link to="/" style={linkStyle}>
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
