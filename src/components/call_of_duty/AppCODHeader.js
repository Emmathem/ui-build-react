import React from 'react';
import { Link } from 'react-router-dom';
import MenuCOD from '../../assets/images/codMenu.svg';
import CODIcon from '../../assets/images/codLogo.png';
import SearchIcon from '@material-ui/icons/Search';

const AppCODHeader = () => {
  return (
    <nav className="extendedHeader">
      <div>
        <img src={CODIcon} alt={CODIcon} />
      </div>
      <div className="extendedHeader__nav">
        <ul>
          <li>
            <Link to="">Updates</Link>
          </li>
          <li>
            <Link to="">Products</Link>
          </li>
          <li>
            <Link to="" className="other">
              Signup Now
            </Link>
          </li>
          <li>
            <Link to="">
              <SearchIcon />
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={MenuCOD} alt="menu" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AppCODHeader;
