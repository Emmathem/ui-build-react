import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/css/main.css";
import "antd/dist/antd.css";
// import AppHeader from "./components/AppHeader";
import AppLogin from "./components/AppLogin";
import AppRegister from "./components/AppRegister";
import AppWelcome from "./components/AppWelcome";
import AppLandingPage from "./components/AppLandingPage";

const App = () => {

  // return (
  //   <div className="landing">
  //     <Router>
  //       <AppHeader />
  //       <div className="wow animated fadeIn landing__bgCover">
  //         <Switch>
  //           <Route path="/first" component={AppLandingPage} />
  //           <Route exact path="/" component={AppWelcome} />
  //           <Route path="/register" component={AppRegister} />
  //           <Route path="/login" component={AppLogin} />
  //         </Switch>
  //       </div>
  //     </Router>
  //   </div>
  // );
  // const [hover, setIsHover] = 


  return (
    <div className="">
      <Router>
        {/* <AppHeader /> */}
        <Switch>
            <Route path="/first" component={AppLandingPage} />
            <Route exact path="/" component={AppWelcome} />
            <Route path="/register" component={AppRegister} />
            <Route path="/login" component={AppLogin} />
          </Switch>
      </Router>
    </div>
  );
};

export default App;
