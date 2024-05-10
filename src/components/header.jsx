import React from "react";
import "../styles/header.css"
import logo from "../assets/LOGO (2).png"

function Header() {
    return (
        <header className="header">
      <figure className="header__fig">
        <img className="logo" src={logo} alt="logo de l'agence kasa" />
      </figure>
      <nav className="nav-header" />
      <nav className="nav-header">
      <navLink to="/" className="nav-header__nav-link-home">
        Accueil
      </navLink>
      <navLink to="/about" className="nav-header__nav-link-about">
        A Propos
      </navLink>
    </nav>
    </header>
    );

}

export default Header