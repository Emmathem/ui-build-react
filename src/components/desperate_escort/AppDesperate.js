import React from 'react';
import AppHeader from './AppHeader';
import AppWelcome from './AppWelcome';

const AppDesperate = () => {
  return (
    <div className="landing">
      <AppHeader />
      <div className="landing__bgCover">
        <AppWelcome />
      </div>
    </div>
  );
};

export default AppDesperate;
