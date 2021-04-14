import React from "react";
import Logo from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <nav className="header">
      <div className="header__logo">
        <Link to="/desperate-escort">
          <img src={Logo} alt="Logo" />
        </Link>
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
};

export default AppHeader;
