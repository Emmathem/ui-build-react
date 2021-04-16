import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import mobileMenu from "../../assets/images/menu.svg";

const AppHeader = () => {
  return (
    <div>
      <nav className="lancerheader hideOnMobile">
        <div className="lancerheader__logo">
          <h4>Freelance</h4>
        </div>
        <div className="lancerheader__nav">
          <div className="lancerheader__sidenav">
            <ul>
              <li>
                <Link to="/">
                  <HomeIcon size="large" style={{ color: "#000" }} />
                  {/* <span>Home</span> */}
                </Link>
              </li>
              <li>
                <Link to="/freelancer/welcome" className="freeColor">
                  Find Expects
                </Link>
              </li>
              <li>
                <Link to="/freelancer/welcome">About Us</Link>
              </li>
              <li>
                <Link to="/freelancer/welcome">Contact Us</Link>
              </li>
              <li>
                <Link to="/freelancer/welcome">
                  <Button type="default" className="button">
                    Join Now
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="lancerheader hideOnWeb">
        <div>
          <Link to="/">
            <img src={mobileMenu} alt="MN" />
          </Link>
        </div>
        <div>
          <h3>freelancer</h3>
        </div>
        <div>
          <Link to="/freelancer/welcome">
            <Button type="default" className="button">
              Join Now
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default AppHeader;
