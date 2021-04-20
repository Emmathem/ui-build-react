import { Button } from "@material-ui/core";
import { Col, Input, Row } from "antd";
import React from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import AppMoverHeader from "./AppMoverHeader";

const AppMoverLandingPage = () => {
  const history = useHistory();
  const onRequest = () => {
    history.push('/movers-ng/request');
  };
  return (
    <div className="moverlanding">
      <Helmet>
        <title>MoversNG | Welcome</title>
      </Helmet>
      <AppMoverHeader />
      <div className="moverlanding__cover" />
      <div className="moverlanding__content">
        <div className="moverlanding__content__col-60">
          <div className="moverlanding__content__info">
            <h3>Behind every great move there is MOVERSNG</h3>
            <Button variant="contained" color="secondary">
              Contact Us
            </Button>
          </div>
        </div>
        <div className="moverlanding__content__col-40">
          <div className="moverlanding__content__booking">
            <div className="moverlanding__content__booking__header">
              <h3>Book Our Service Now</h3>
              <h4>Fill The Form To Book Our Service</h4>
            </div>
            <div className="moverlanding__content__booking__forms">
              <Row>
                <Col span="24">
                  <div className="formgroup">
                    <Input placeholder="Enter First Name" />
                  </div>
                </Col>
                <Col span="24">
                  <div className="formgroup">
                    <Input placeholder="Enter First Name" />
                  </div>
                </Col>
                <Col span="24">
                  <div className="formgroup">
                    <Input placeholder="Enter First Name" />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span="24">
                  <Button variant="contained" color="primary" fullWidth onClick={onRequest}>
                    GET OUR SERVICE
                  </Button>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppMoverLandingPage;
