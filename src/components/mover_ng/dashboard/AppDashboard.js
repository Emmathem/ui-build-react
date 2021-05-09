import React from 'react';
import { Row, Col } from 'antd';
import { LOGGER } from '../../../utils/miscelleous';
import AppDashboardGraph from './cards/AppDashboardGraph';
import AppDashboardLayout from './layouts/AppDashboardLayout';
import AppDashboardOrders from './cards/AppDashboardOrders';

const AppDashboard = props => {
  LOGGER('p', props);
  return (
    <AppDashboardLayout pageTitle="Dashboard | MoversNG">
      <AppDashboardGraph />
      <Row gutter={[16, 16]}>
        <Col span={16}>
          <AppDashboardOrders />
        </Col>
        <Col span={8}>packages</Col>
      </Row>
    </AppDashboardLayout>
  );
};

export default AppDashboard;
