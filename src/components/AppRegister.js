import React from "react";
import { Helmet } from "react-helmet";
import TwitterLogo from "../assets/images/twitter.svg";
import GooglePlus from "../assets/images/googlePlus.svg";
import FacebookLogo from "../assets/images/facebook.svg";
import { Row, Col, Input, Select, Divider, Button } from "antd";
const { Option } = Select;

const AppRegister = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div>
      <Helmet>
        <title>Register | Desperate Escort</title>
      </Helmet>
      <div className="register">
        <div className="register__header">
          <h2>Signup</h2>
          <h5>Sign up to get connected to escorts within your city now!</h5>
        </div>
        <div className="register__formContent">
          <div className="register__formContent__formField">
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <div className="register__formgroup">
                  <label>Email Address</label>
                  <Input type="text" placeholder="newtechguy@tech.io" />
                </div>
              </Col>
              <Col span={12}>
                <div className="register__formgroup">
                  <label>First Name</label>
                  <Input type="text" placeholder="Ambassador" />
                </div>
              </Col>
              <Col span={12}>
                <div className="register__formgroup">
                  <label>Last Name</label>
                  <Input type="text" placeholder="Constance" />
                </div>
              </Col>
              <Col span={12}>
                <div className="register__formgroup">
                  <label>Country</label>
                  <Select defaultValue="Nigeria" onChange={handleChange}>
                    <Option value="Nigeria">Nigeria</Option>
                    <Option value="Canada">Canada</Option>
                    <Option value="Ghana">Ghana</Option>
                    <Option value="USA">USA</Option>
                  </Select>
                </div>
              </Col>
              <Col span={12}>
                <div className="register__formgroup">
                  <label>Phone Number</label>
                  <Input type="tel" placeholder="08123456789" />
                </div>
              </Col>
              <Col span={12}>
                <div className="register__formgroup">
                  <label>City</label>
                  <Input type="text" placeholder="Lagos" />
                </div>
              </Col>
              <Col span={12}>
                <div className="register__formgroup">
                  <label>Zip Code</label>
                  <Input type="number" placeholder="100212" />
                </div>
              </Col>
            </Row>
            <br />
            <Row>
              <Col span={24}>
                <Button type="primary" block>
                  Signup now
                </Button>
              </Col>
            </Row>
            <Divider>OR</Divider>
            <small className="text-color">
              Sign up with your social media account!
            </small>
            <Row gutter={8}>
              <Col span={8}>
                <button className="register__googleplus">
                  <img src={GooglePlus} alt="t" /> Sign Up with Google Plus
                </button>
              </Col>
              <Col span={8}>
                <button className="register__twitter">
                  <img src={TwitterLogo} alt="t" /> Sign Up with Twitter
                </button>
              </Col>
              <Col span={8}>
                <button className="register__facebook">
                  <img src={FacebookLogo} alt="t" /> Sign Up with Facebook
                </button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppRegister;
