import React from 'react';
import Logo from '../../assets/images/Logo.svg';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';

const AppHeader = () => {
  return (
    <nav className="header">
      <div className="header__logo">
        <div>
          <Link to="/">
            <HomeIcon size="large" style={{ color: '#fff' }} />
          </Link>
        </div>
        <div>
          <Link to="/desperate-escort">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default AppHeader;
