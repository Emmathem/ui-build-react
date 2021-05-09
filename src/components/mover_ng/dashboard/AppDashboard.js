import React from 'react';
import { Row, Col } from 'antd';
import { LOGGER } from '../../../utils/miscelleous';
import AppDashboardGraph from './cards/AppDashboardGraph';
import AppDashboardLayout from './layouts/AppDashboardLayout';
import AppDashboardOrders from './cards/AppDashboardOrders';
import AppPackages from './cards/AppPackages';

const AppDashboard = props => {
  LOGGER('p', props);
  return (
    <AppDashboardLayout pageTitle="Dashboard | MoversNG">
      <AppDashboardGraph />
      <Row gutter={[16, 16]}>
        <Col xs={24} xl={16} lg={16}>
          <AppDashboardOrders />
        </Col>
        <Col xs={24} xl={8} lg={8}>
          <AppPackages />
        </Col>
      </Row>
    </AppDashboardLayout>
  );
};

export default AppDashboard;
