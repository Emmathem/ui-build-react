import React from 'react';
import { Helmet } from 'react-helmet';
import AppMoverHeader from './AppMoverHeader';
import '../../assets/css/mover.css';
import Boxes from '../../assets/images/boxes.png';
import DeliveryMan from '../../assets/images/delivery-man.png';
import DeliverTruck from '../../assets/images/delivery-truck-1.png';
import SmallVehicle from '../../assets/images/Icon.png';
import MediumVehicle from '../../assets/images/Icon-1.png';
import LargeVehicle from '../../assets/images/Icon-2.png';
import { Col, Input, Row } from 'antd';
import { Button } from '@material-ui/core';

const AppMoversRequestDetails = () => {
  return (
    <div className="moverlanding">
      <Helmet>
        <title>Request Service | MoversNG</title>
      </Helmet>
      <AppMoverHeader />
      <div className="coverBg" />
      <div className="request">
        <div className="request__pcol">
          <div className="request__container">
            <div className="request__header">
              <div className="request__iconholder">
                <img src={Boxes} alt="box" />
              </div>
              <h4>Pick-Up Details</h4>
            </div>
            <div className="request__forms">
              <Row>
                <Col span="24">
                  <div className="form-group">
                    <label>Full Name</label>
                    <Input placeholder="Input your fullname" />
                  </div>
                </Col>
                <Col span="24">
                  <div className="form-group">
                    <label>Email</label>
                    <Input type="email" placeholder="Input your email" />
                  </div>
                </Col>
                <Col span="24">
                  <div className="form-group">
                    <label>Address</label>
                    <Input placeholder="Input your address" />
                  </div>
                </Col>
                <Col span="24">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <Input type="email" placeholder="Input your Phone Number" />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="request__pcol">
          <div className="request__container">
            <div className="request__header">
              <div className="request__iconholder">
                <img src={DeliveryMan} alt="box" />
              </div>
              <h4>DELIVERY Details</h4>
            </div>
            <div className="request__forms">
              <Row>
                <Col span="24">
                  <div className="form-group">
                    <label>Full Name</label>
                    <Input placeholder="Input your fullname" />
                  </div>
                </Col>
                <Col span="24">
                  <div className="form-group">
                    <label>Email</label>
                    <Input type="email" placeholder="Input your email" />
                  </div>
                </Col>
                <Col span="24">
                  <div className="form-group">
                    <label>Address</label>
                    <Input placeholder="Input your address" />
                  </div>
                </Col>
                <Col span="24">
                  <div className="form-group">
                    <label>Phone Number</label>
                    <Input type="email" placeholder="Input your Phone Number" />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="request__pcol">
          <div className="request__container">
            <div className="request__header">
              <div className="request__iconholder">
                <img src={DeliverTruck} alt="box" />
              </div>
              <h4>SELECT VEHICLE TYPE</h4>
            </div>
            <div className="request__forms">
              <div className="request__vehicle">
                <div>
                  <img src={SmallVehicle} alt="truck_1" />
                  <span>Small</span>
                </div>
                <div>
                  <img src={MediumVehicle} alt="truck_2" /> <span>Medium</span>
                </div>
                <div>
                  <img src={LargeVehicle} alt="truck_3" />
                  <span>Large</span>
                </div>
              </div>
              <Row>
                <Col span="24">
                  <Button variant="contained" fullWidth>
                    BOOK NOW
                  </Button>
                </Col>
              </Row>
              <br />
              <Row>
                <Col span="24">
                  <Button variant="contained" color="secondary" fullWidth>
                    BOOK LATER
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

export default AppMoversRequestDetails;
