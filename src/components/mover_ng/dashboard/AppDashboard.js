import React from 'react';
import { Helmet } from 'react-helmet';
import AppDashboardHeader from './AppDashboardHeader';
import AppDashboardSidebar from './AppDashboardSidebar';
import { LOGGER } from '../../../utils/miscelleous';

const AppDashboard = props => {
  LOGGER('p', props);
  return (
    <div className="dashboard">
      <Helmet>
        <title>Dashboard | MoversNG</title>
      </Helmet>
      <AppDashboardHeader />
      <AppDashboardSidebar />
      <main>d</main>
    </div>
  );
};

export default AppDashboard;
