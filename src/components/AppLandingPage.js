import React, { useState } from "react";
import "../assets/css/entry.css";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const AppLandingPage = () => {
  const [hover, setIsHover] = useState(false);

  const openMenuPage = () => {
    setIsHover(!hover);
  };
  // const gridObject = { xs: 8, sm: 16, md: 24, lg: 32 };
  return (
    <div className="entrypage">
      <Helmet>
        <title>Welcome | Project Design</title>
        <meta
          name="author"
          content="Developer: Temitope Falua, Designer: Gbolayo Olawumi"
        />
        <meta content="A group of landing pages for website" />
      </Helmet>
      <div className="workdone">
        <div
          className="wow animated zoomIn workdone__inner"
          data-wow-delay="5s"
          data-wow-duration="1.9s"
        >
          <h3>Select a Project</h3>
          <div className="workdone__section">
            <Row gutter={[16, 16]}>
              <Col xs={12} xl={8} lg={6}>
                <Link to="/desperate-escort" className="workdone__eachSection">
                  <div>D.E</div>
                </Link>
                <div className="workdone__name">Desperate Escort</div>
              </Col>
              <Col xs={12} xl={8} lg={6}>
                <Link to="/freelancer/welcome" className="workdone__eachSection">
                  <div>F.R</div>
                </Link>
                <div className="workdone__name">Freelancer</div>
              </Col>
              <Col xs={12} xl={8} lg={6}>
                <Link to="/connect/welcome" className="workdone__eachSection">
                  <div>C.N</div>
                </Link>
                <div className="workdone__name">The Connect</div>
              </Col>
              <Col xs={12} xl={8} lg={6}>
                <Link to="/cod-extended/welcome" className="workdone__eachSection">
                  <div>C.D</div>
                </Link>
                <div className="workdone__name">Call of Duty</div>
              </Col>
              <Col xs={12} xl={8} lg={6}>
                <Link to="/moversng" className="workdone__eachSection">
                  <div>M.N</div>
                </Link>
                <div className="workdone__name">Movers NG</div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div
        className={`wow animated slideInDown entrypage__welcome ${
          hover ? "slideDown" : ""
        }`}
      >
        <h4>Welcome to My Portfolio</h4>
      </div>
      <div
        className={`entrypage__lock ${hover ? "slideDown" : ""}`}
        onClick={openMenuPage}
      >
        {!hover ? (
          <LockOutlinedIcon
            style={{ fontSize: "5em" }}
            className="entrypage__icon"
          />
        ) : (
          <LockOpenOutlinedIcon
            style={{ fontSize: "5em" }}
            className="__icon"
          />
        )}
      </div>
      <div
        className={`entrypage__slideLeft leftCol ${hover ? "hoverLeft" : ""}`}
      />
      <div
        className={`entrypage__slideLeft rightCol ${hover ? "hoverRight" : ""}`}
      />
    </div>
  );
};

export default AppLandingPage;
