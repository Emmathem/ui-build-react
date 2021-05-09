import React from 'react';
import { Helmet } from 'react-helmet';
import AppDashboardHeader from './AppDashboardHeader';
import AppDashboardSidebar from './AppDashboardSidebar';
import { LOGGER } from '../../../../utils/miscelleous';

const AppDashboardLayout = ({ children, pageTitle }) => {
  LOGGER('title', pageTitle);
  return (
    <div className="dashboard">
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <AppDashboardHeader />
      <AppDashboardSidebar />
      <main>{children}</main>
    </div>
  );
};

export default AppDashboardLayout;
