import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const linkStyle = { color: "#dedede", textDecoration: "none" };

export function Navbar() {
  const [responsive, setResponsive] = useState(false);

  function ResponsiveBtn() {
    setResponsive(prevState => !prevState);
  }

  return (
    <>
      <header className="container navbar">
        <nav>
          <p>Rafael Masselli</p>
        </nav>
        <nav>
          <ul className="container responsive__navigation">
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
          <label className={`responsive__line__navbar ${responsive ? "active" : ""}`} onClick={ResponsiveBtn}>
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </label>
        </nav>
      </header>
      <ul className={`container responsive__navbar ${responsive ? "visible" : ""}`}>
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
    </>
  );
}