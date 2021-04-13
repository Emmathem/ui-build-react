import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppRegister from "./components/AppRegister";
import AppWelcome from "./components/AppWelcome";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={AppWelcome} />
            <Route path="/register" component={AppRegister} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
