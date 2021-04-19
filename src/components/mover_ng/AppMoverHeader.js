import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/mover.css";
import MoverLogo from "../../assets/images/delivery-truck.png";

const AppMoverHeader = () => {
  return (
    <div className="moverheader">
      <div className="moverheader__col">
        <div className="moverheader__logo">
          <img src={MoverLogo} alt="logo" />
          <h3>MoversNG</h3>
        </div>
      </div>
      <div className="moverheader__col">
        <div className="moverheader__nav">
          <ul>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Feature</Link>
            </li>
            <li>
              <Link>Client</Link>
            </li>
            <li>
              <Link>Plans</Link>
            </li>
            <li>
              <Link>
                <Button variant="contained" color="primary">JOIN US</Button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppMoverHeader;
