import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppLogin from "./components/desperate_escort/AppLogin";
import AppRegister from "./components/desperate_escort/AppRegister";
import AppLandingPage from "./components/AppLandingPage";
import AppDesperate from "./components/desperate_escort/AppDesperate";
import AppFreelanceLanding from "./components/freelancer/AppFreelanceLanding";
import AppConnectHome from "./components/connect/AppConnectHome";
import AppCallOfDutyExtended from "./components/call_of_duty/AppCallOfDutyExtended";

const App = () => {

  return (
    <div className="">
      <Router>
        <Switch>
            <Route exact path="/" component={AppLandingPage} />
            <Route path="/desperate-escort" component={AppDesperate} />
            <Route path="/register" component={AppRegister} />
            <Route path="/login" component={AppLogin} />
            <Route path="/freelancer/welcome" component={AppFreelanceLanding} />
            <Route path="/connect/welcome" component={AppConnectHome} />
            <Route path="/cod-extended/welcome" component={AppCallOfDutyExtended} />
          </Switch>
      </Router>
    </div>
  );
};

export default App;
