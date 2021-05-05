import React from 'react';
import { Helmet } from 'react-helmet';
import AppConnetHeader from './AppConnetHeader';
import ConnectLogo from '../../assets/images/connectIcon.svg';
import StoreImage from '../../assets/images/store_image.png';
import { Button, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

const AppConnectHome = () => {
  return (
    <div>
      <AppConnetHeader />
      <div className="connect">
        <Helmet>
          <title>The Connect | Welcome</title>
        </Helmet>
        <div className="connect__bgCover"></div>
        <div className="connect__content">
          <div className="connect__content__header">
            <div className="connect__content__innerheader">
              <img src={ConnectLogo} alt={'logo'} />
              <h2>Connect</h2>
            </div>
            <p>
              Come for what you love
              <br />
              Stay for what you discover
            </p>
          </div>
          <div className="connect__content__actions">
            <Row>
              <Col span={24}>
                <Button className="button btn-started" block>
                  Get Started
                </Button>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <Button className="button btn-login" block>
                  Log In
                </Button>
              </Col>
            </Row>
          </div>
          <div className="connect__content__store">
            <img src={StoreImage} alt="stores" />
          </div>
        </div>
        <div className="connect__mobileicon hideOnWeb">
          <Link to="/">
            <HomeIcon size="large" style={{ color: '#fff' }} />
            {/* <span>Home</span> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppConnectHome;
