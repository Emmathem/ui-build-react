import React, { useState } from "react";
// import { Row, Col } from "antd";
import { Switch } from "@material-ui/core";
import { Notifications, ExitToApp } from "@material-ui/icons";
import MoverLogo from "../../../assets/images/delivery-truck.png";
import AppLogonUser from "../../shared/AppLogonUser";
// import { Link } from "react-router-dom";

const AppDashboardHeader = () => {
  const [state, setState] = useState({
    themeBlack: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <header className="dheader">
      <div className="dheader__col">
        <div className="dheader__logo">
          <img src={MoverLogo} alt="logo" />
          <h3>MoversNG</h3>
        </div>
      </div>
      <div className="dheader__col">
        <nav className="dheader__nav">
          <ul>
            <li>
              <Switch
                checked={state.checkedA}
                onChange={handleChange}
                name="themeBlack"
                defaultChecked
                color="primary"
                inputProps={{ "aria-label": "checkbox with default color" }}
              />
            </li>
            <li>
              <Notifications />
            </li>
            <li>
              <AppLogonUser
                userImage="https://res.cloudinary.com/emmathem-media-company/image/upload/v1619566383/frontend-picture_e8bcqj.jpg"
                username="Temitope Falua"
              />
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <ExitToApp />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AppDashboardHeader;
