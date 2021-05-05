import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../../assets/css/moverdash.css';
import MoverLogo from '../../../assets/images/delivery-truck.png';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import { Row, Col, Card, Input, Button, Divider, notification } from 'antd';
import { UserOutlined, LockOutlined, LoginOutlined } from '@ant-design/icons';
import { LOGGER } from '../../../utils/miscelleous';

const AppMoverLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let history = useHistory();
  const [loading, setLoading] = useState(false);
  const returnHome = () => {
    history.push('/moversng');
  };
  // Default logon user details
  const adminDetails = {
    username: 'Admin',
    password: 'admin123',
  };
  const loadingButton = () => setLoading(!loading);
  const onLogin = data => {
    loadingButton();
    LOGGER('data', JSON.stringify(data));
    if (
      adminDetails.username !== data.username &&
      adminDetails.password !== data.password
    ) {
      notification.error({
        key: 'loginAlert',
        message: 'Error',
        description: 'Incorrect Login Details, Try again or Contact the Admin',
        duration: 0,
      });
      setLoading(false);
      return;
    }
    setTimeout(() => {
      setLoading(loading);
      notification.close('loginAlert');
      history.push('/movers-ng/dashboard');
    }, 5000);
  };

  return (
    <div className="login">
      <Helmet>
        <title>Admin Login | MoversNG</title>
      </Helmet>
      <div className="login__container">
        <Row>
          <Col xs={{ span: 24, offset: 0 }} xl={{ span: 6, offset: 9 }} lg={6}>
            <Card bordered={false}>
              <div className="login__inner">
                <div className="moverheader__logo" onClick={returnHome}>
                  <img src={MoverLogo} alt="logo" />
                </div>
                <h4>Welcome Back</h4>
                <form onSubmit={onLogin}>
                  <div className="form-group">
                    <Input
                      prefix={<UserOutlined />}
                      size="large"
                      placeholder="Username"
                      {...register('username', { required: true })}
                    />
                    {errors.username && (
                      <span className="error">This field is required</span>
                    )}
                  </div>
                  <div className="form-group">
                    <Input.Password
                      size="large"
                      prefix={<LockOutlined />}
                      placeholder="Password"
                      {...register('password', { required: true })}
                    />
                    {errors.password && (
                      <span className="error">This field is required</span>
                    )}
                  </div>
                  <div>
                    <Button
                      icon={<LoginOutlined />}
                      type="primary"
                      loading={loading}
                      onClick={handleSubmit(onLogin)}
                    >
                      Login
                    </Button>
                  </div>
                  <Divider>Notice</Divider>
                  <div className="login__notice">
                    <small>
                      Never send your password via email Never share your
                      password with anyone
                    </small>
                  </div>
                </form>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AppMoverLogin;
