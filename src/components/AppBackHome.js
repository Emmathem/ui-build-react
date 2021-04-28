import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import HomeIcon from "@material-ui/icons/Home";

const AppBackHome = ({ size, color }) => {
  const Backhome = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  `
  return (
    <Backhome>
      <Link to="/">
        <HomeIcon size={size} style={{ color: `${color}` }} />
      </Link>
    </Backhome>
  );
};

export default AppBackHome;
