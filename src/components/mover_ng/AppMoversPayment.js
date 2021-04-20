import React from "react";
import { Helmet } from "react-helmet";
import AppMoverHeader from "./AppMoverHeader";
import "../../assets/css/mover.css";

const AppMoversPayment = () => {
  return (
    <div className="moverlanding">
      <Helmet>
        <title>Confirmation & Payment | MoversNG</title>
      </Helmet>
      <AppMoverHeader />
      <div className="payment">
        <div className="payment__pcol">
          <div className="payment__container">
            <div className="payment__header">
              <h4>Pick-Up Details</h4>
            </div>
          </div>
        </div>
        <div className="payment__pcol">
          <div className="payment__container">
            <div className="payment__header">
              <h4>DELIVERY Details</h4>
            </div>
          </div>
        </div>
        <div className="payment__pcol">
          <div className="payment__container">
            <div className="payment__header">
              <h4>SELECT VEHICLE TYPE</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppMoversPayment;
