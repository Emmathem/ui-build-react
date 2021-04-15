import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <nav className="lancerheader">
      <div className="lancerheader__logo">
        <h4>Freelance</h4>
      </div>
      <div className="lancerheader__nav">
        <div className="lancerheader__sidenav">
          <ul>
            <li>
              <Link to="/freelancer/welcome" className="freeColor">Find Expects</Link>
            </li>
            <li>
              <Link to="/freelancer/welcome">About Us</Link>
            </li>
            <li>
              <Link to="/freelancer/welcome">Contact Us</Link>
            </li>
            <li>
              <Link to="/freelancer/welcome">
                <Button type="default" className="button">Join Now</Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
