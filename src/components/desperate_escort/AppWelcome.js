import React from "react";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router";
// import { Link } from "react-router-dom";

const AppWelcome = () => {
  const history = useHistory();
  const gotoNext = () => {
    history.push("/register");
  };
  return (
    <div>
      <Helmet>
        <title>Welcome | Meet A Desperate Escort</title>
        <meta
          name="author"
          content="Developer: Temitope Falua, Designer: Gbolayo Olawumi"
        />
        <meta
          name="description"
          content=" Want to enjoy your holidays, weekend, we offer affordable and
          exclusive escorts"
        />
      </Helmet>
      <div
        className="wow animated fadeInLeft  landing__welcome"
        data-wow-delay="1.2s"
        data-wow-duration="2s"
      >
        <div className="landing__content">
          <h3>Want to Meet A</h3>
          <h4>Desperate Escort?</h4>
        </div>
        <button
          type="button"
          onClick={gotoNext}
          className="wow animated fadeInUp landing__getStartedBtn"
          data-wow-delay="3.5s"
          data-wow-duration="2s"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default AppWelcome;
