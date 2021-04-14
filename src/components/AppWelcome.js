import React from "react";
import { Link } from "react-router-dom";

const AppWelcome = () => {
  return (
    <div className="landing">
      <div className="landing__bgCover">
        <div className="landing__welcome">
          <div className="landing__content">
            <h3>Want to Meet A</h3>
            <h4>Desperate Escort?</h4>
          </div>
          <Link to="/register">
            <button type="button" className="landing__getStartedBtn">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppWelcome;
