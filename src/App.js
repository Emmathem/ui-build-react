import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/css/main.css";
import 'antd/dist/antd.css';
import AppHeader from "./components/AppHeader";
import AppLogin from "./components/AppLogin";
import AppRegister from "./components/AppRegister";
import AppWelcome from "./components/AppWelcome";

const App = () => {
  return (
    <div className="landing">
      <Router>
      <AppHeader />
        <div className="landing__bgCover">
          <Switch>
            <Route exact path="/" component={AppWelcome} />
            <Route path="/register" component={AppRegister} />
            <Route path="/login" component={AppLogin} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
