import React from "react";
import logoMark from "../public/logomark.svg";
import { NavLink } from "react-router-dom";
function Navbar(props) {
  return (
    <div>
      <nav>
        <NavLink to="/" aria-label="Home">
          <img src={logoMark} alt="" height={30} />
          <span>HomeBudget</span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
