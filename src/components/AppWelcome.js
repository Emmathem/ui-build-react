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
      </Helmet>
      <div className="landing__welcome">
        <div className="landing__content">
          <h3>Want to Meet A</h3>
          <h4>Desperate Escort?</h4>
        </div>
        <button
          type="button"
          onClick={gotoNext}
          className="landing__getStartedBtn"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default AppWelcome;
