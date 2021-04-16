import React from "react";
import { Helmet } from "react-helmet";
import AppCODHeader from "./AppCODHeader";
import "../../assets/css/cod.css";
import ComputerIcon from "@material-ui/icons/Computer";
import { Button } from "antd";

const AppCallOfDutyExtended = () => {
  return (
    <div>
      <Helmet>
        <title>COD | Call of Duty Extended</title>
      </Helmet>
      <AppCODHeader />
      <div className="codExtended">
        <div className="codExtended__lang">
          <div className="codExtended__lang__inner">
            <div>
              <span>DE</span>
            </div>
            <div>
              <span>FR</span>
            </div>
            <div className="active">
              <span>EN</span>
            </div>
          </div>
        </div>
        <div className="codExtended__inner">
          <div className="codExtended__mostInner">
            <div className="codExtended__inner__col">
              <div className="codExtended__content">
                <h4>OFFICIAL GAME ANNOUNCEMENT</h4>
                <h2 className="codColor">CALL OF DUTY</h2>
                <h3>EXTENDED</h3>
                <p className="codExtended__content__span1">
                  <ComputerIcon style={{ marginRight: '16px'}} /> PC REQUIREMENTS
                </p>
                <p className="codExtended__content__span1">
                  SEASON 2 AVAILABLE FROM
                  <span>&nbsp; MARCH 1, 2021</span>
                </p>
                <Button className="codExtended__content__button">Sign up Now</Button>
              </div>
            </div>
            <div className="codExtended__inner__col">
              <div className="codExtended__slideshow">SLide</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCallOfDutyExtended;
