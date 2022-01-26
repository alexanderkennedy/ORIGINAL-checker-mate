import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo/tree-logo.png";
import "./SiteHeader.scss";

export default function SiteHeader() {
  return (
    <header className="page-header">
      <NavLink className="navbar__navLink" to="/">
        <img className="navbar__logo" src={Logo} alt="TreeSprint Logo" />
      </NavLink>
      <nav className="navbar">
        <NavLink
          className="navbar__link"
          activeClassName="navbar__link--selected"
          to="/Login"
        >
          Sign In
        </NavLink>
        <NavLink
          className="navbar__link"
          activeClassName="navbar__link--selected"
          to="/MainList"
        >
          List
        </NavLink>
      </nav>
    </header>
  );
}
