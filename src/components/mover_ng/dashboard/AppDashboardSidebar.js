import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Popconfirm } from 'antd';
import {
  ExitToApp,
  Help,
  Menu,
  Dashboard,
  Person,
  Settings,
  LibraryBooks,
  Receipt,
} from '@material-ui/icons';
import { LOGGER } from '../../../utils/miscelleous';

const AppDashboardSidebar = () => {
  const history = useHistory();

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showPopconfirm = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
      history.push('/movers-ng/dashboard/login');
    }, 2000);
  };

  const handleCancel = () => {
    LOGGER('Clicked cancel button');
    setVisible(false);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__lockIcon">
        <Menu />
        {/* <img src={LockIcon} alt="lock" /> */}
      </div>
      <div className="sidebar__menu">
        <ul>
          <li>
            <Link to="/">
              <Dashboard />
            </Link>
          </li>
          <li>
            <Link to="/">
              <Person />
            </Link>
          </li>
          <li>
            <Link to="/">
              <Receipt />
            </Link>
          </li>
          <li>
            <Link to="/">
              <LibraryBooks />
            </Link>
          </li>
          <li>
            <Link to="/">
              <Settings />
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar__footer">
        <Popconfirm
          placement="top"
          title="Are you sure you want to logout this session?"
          visible={visible}
          onConfirm={handleOk}
          okButtonProps={{ loading: confirmLoading }}
          onCancel={handleCancel}
          okText="Logout"
        />
        <ul>
          <li>
            <Link to="/">
              <Help />
            </Link>
          </li>
          <li onClick={showPopconfirm}>
            <ExitToApp />
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AppDashboardSidebar;
