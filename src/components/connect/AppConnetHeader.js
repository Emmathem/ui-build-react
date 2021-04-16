import React from "react";
import ConnectIcon from "../../assets/images/connectColorIcon.png";
import { Input, Space } from "antd";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
const { Search } = Input;

const AppConnetHeader = () => {
  const onSearch = (value) => console.log(value);
  return (
    <nav className="connectHeader hideOnMobile">
      <div>
        <img src={ConnectIcon} alt="icon" />
      </div>
      <div>
        <Link to="/">
          <HomeIcon
            size="large"
            style={{ color: "#fff", marginLeft: "10px" }}
          />
          {/* <span>Home</span> */}
        </Link>
      </div>
      <div>
        <Space>
          <Search
            placeholder="Search Connect"
            onSearch={onSearch}
            enterButton
          />
        </Space>
      </div>
    </nav>
  );
};

export default AppConnetHeader;
