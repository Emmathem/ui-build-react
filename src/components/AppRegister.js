import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import TwitterLogo from "../assets/images/twitter.svg";
import GooglePlus from "../assets/images/googlePlus.svg";
import FacebookLogo from "../assets/images/facebook.svg";
import { Row, Col, Input, Select, Divider, Button } from "antd";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PersonOutlinedIcon from "@material-ui/icons/PersonOutlined";
import PhoneOutlinedIcon from "@material-ui/icons/PhoneOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
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
      <div
        className="animated wow fadeIn register"
        data-wow-delay="1.2s"
        data-wow-duration="1.1s"
      >
        <div className="hideOnMobile">
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
              <div className="register__existing">
                Already Have an Account?{" "}
                <Link to="/login" className="btnColor">
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Forms on Mobile */}
        <div className="hideOnWeb">
          <div className="register__mobile">
            <h3>Sign Up</h3>
            <div className="register__mobileFormContent">
              <div className="register__formgroup">
                <Row>
                  <Col span={24}>
                    <Input
                      type="email"
                      placeholder="Email"
                      prefix={<MailOutlineIcon />}
                    />
                  </Col>
                </Row>
              </div>
              <div className="register__formgroup">
                <Row>
                  <Col span={24}>
                    <Input placeholder="Name" prefix={<PersonOutlinedIcon />} />
                  </Col>
                </Row>
              </div>
              <div className="register__formgroup">
                <Row>
                  <Col span={24}>
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      prefix={<PhoneOutlinedIcon />}
                    />
                  </Col>
                </Row>
              </div>
              <div className="register__formgroup">
                <Row>
                  <Col span={24}>
                    <Input.Password
                      placeholder="Password"
                      prefix={<LockOutlinedIcon />}
                    />
                  </Col>
                </Row>
              </div>
              <div className="register__formgroup">
                <Button type="primary" size="default" block>
                  Signup now
                </Button>
              </div>

              <Row>
                <Col span={15} offset={5}>
                  <Divider>OR</Divider>
                  <small className="white-color text-center">
                    Sign up with your social media account!
                  </small>
                  <div className="register__mp">
                    <Row gutter={8}>
                      <Col span={8}>
                        <button className="register__googleplus">
                          <img src={GooglePlus} alt="t" />
                        </button>
                      </Col>
                      <Col span={8}>
                        <button className="register__twitter">
                          <img src={TwitterLogo} alt="t" />
                        </button>
                      </Col>
                      <Col span={8}>
                        <button className="register__facebook">
                          <img src={FacebookLogo} alt="t" />
                        </button>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
              <p className="register__existing">
                <span className="white-color">Already Have an Account?</span>
                &nbsp;
                <Link to="/login" className="btnColor">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppRegister;
