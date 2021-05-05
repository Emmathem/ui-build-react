import React from "react";
import { Helmet } from "react-helmet";
import AppDashboardHeader from "./AppDashboardHeader";
import AppDashboardSidebar from "./AppDashboardSidebar";

const AppDashboard = () => {
  return (
    <div className="dashboard">
      <Helmet>
        <title>Dashboard | MoversNG</title>
      </Helmet>
      <AppDashboardHeader />
      <AppDashboardSidebar />
      <main></main>
    </div>
  );
};

export default AppDashboard;
