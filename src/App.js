import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppLogin from "./components/desperate_escort/AppLogin";
import AppRegister from "./components/desperate_escort/AppRegister";
import AppLandingPage from "./components/AppLandingPage";
import AppDesperate from "./components/desperate_escort/AppDesperate";
import AppFreelanceLanding from "./components/freelancer/AppFreelanceLanding";
import AppConnectHome from "./components/connect/AppConnectHome";
import AppCallOfDutyExtended from "./components/call_of_duty/AppCallOfDutyExtended";
import AppMoverLandingPage from "./components/mover_ng/AppMoverLandingPage";
import AppMoversRequestDetails from "./components/mover_ng/AppMoversRequestDetails";
import AppMoversPayment from "./components/mover_ng/AppMoversPayment";
import TestScript from "./components/TestScript";
import AppMoverLogin from "./components/mover_ng/dashboard/AppMoverLogin";
import AppDashboard from "./components/mover_ng/dashboard/AppDashboard";

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
          <Route
            path="/cod-extended/welcome"
            component={AppCallOfDutyExtended}
          />
          <Route path="/moversng" component={AppMoverLandingPage} />
          <Route
            path="/movers-ng/request"
            component={AppMoversRequestDetails}
          />
          <Route
            path="/movers-ng/request/payment"
            component={AppMoversPayment}
          />
          <Route path="/movers-ng/dashboard/login" component={AppMoverLogin} />
          <Route path="/movers-ng/dashboard" component={AppDashboard} />
          <Route path="/test" component={TestScript} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
