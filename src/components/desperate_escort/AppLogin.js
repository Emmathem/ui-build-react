import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import TwitterLogo from "../../assets/images/twitter.svg";
import GooglePlus from "../../assets/images/googlePlus.svg";
import FacebookLogo from "../../assets/images/facebook.svg";
import { Row, Col, Input, Divider, Button } from "antd";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import AppHeader from "./AppHeader";

const AppLogin = () => {
  return (
    <div className="landing">
      <Helmet>
        <title>Login | Desperate Escort</title>
      </Helmet>
      <AppHeader />
      <div className="wow animated fadeIn landing__bgCover">
        <div
          className="animated wow fadeIn register"
          data-wow-delay="1.2s"
          data-wow-duration="1.1s"
        >
          <div className="hideOnMobile login">
            <div className="register__header">
              <h2>Log In</h2>
              {/* <h5>Loi connected to escorts within your city now!</h5> */}
            </div>
            <div className="register___formLogin">
              <div className="register__formField login">
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <div className="register__formgroup">
                      <label>Email Address</label>
                      <Input type="text" placeholder="newtechguy@tech.io" />
                    </div>
                  </Col>
                  <Col span={24}>
                    <div className="register__formgroup">
                      <label>Password</label>
                      <Input.Password placeholder="Password" />
                    </div>
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col span={24}>
                    <Button type="primary" block>
                      Log In
                    </Button>
                  </Col>
                </Row>
                <Divider>OR</Divider>
                <div className="login__info">
                  Log In with your social media account!
                </div>
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
                <div className="login__info2">
                  <span>Already Have an Account?</span>{" "}
                  <Link to="/register" className="btnColor">
                    Sign Up Here
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Forms on Mobile */}
          <div className="hideOnWeb">
            <div className="register__mobile">
              <h3>Sign In</h3>
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
                      <Input.Password
                        placeholder="Password"
                        prefix={<LockOutlinedIcon />}
                      />
                    </Col>
                  </Row>
                </div>
                <div className="register__formgroup">
                  <Button type="primary" size="default" block>
                    Log In
                  </Button>
                </div>

                <Row>
                  <Col span={15} offset={5}>
                    <Divider>OR</Divider>
                    <small className="white-color text-center">
                      Log in with your social media account!
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
                  <span className="white-color">Don’t have an account?</span>
                  &nbsp;
                  <Link to="/register" className="btnColor">
                    Sign up Here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppLogin;
