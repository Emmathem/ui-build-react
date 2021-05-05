import React from "react";
import { Link } from "react-router-dom";
import LockIcon from "../../../assets/images/movers/lockIcon.svg";
// import { QuestionCircleOutlined } from "@ant-design/icons";
import { ExitToApp, Help } from "@material-ui/icons";

const AppDashboardSidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__lockIcon">
        <img src={LockIcon} alt="lock" />
      </div>
      <div className="sidebar__menu"></div>
      <div className="sidebar__footer">
        <ul>
          <li>
            <Link to="/">
              <Help />
            </Link>
          </li>
          <li>
            <Link to="/">
              <ExitToApp />
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AppDashboardSidebar;
