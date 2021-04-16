import React from "react";
import { Helmet } from "react-helmet";
import AppCODHeader from "./AppCODHeader";
import "../../assets/css/cod.css";

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
                  <div><span>DE</span></div>
                  <div><span>FR</span></div>
                  <div className="active"><span>EN</span></div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default AppCallOfDutyExtended;
