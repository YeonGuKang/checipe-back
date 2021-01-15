import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Navigation from "./Navigation";
import Mainpage from "../routes/Mainpage";

console.log("run router");

const AppRouter = ({isLoggedIn, userObj}) => {
  console.log("run router fuc");

    return(
<Router>
{isLoggedIn && <Navigation />}
      <Switch>
        {isLoggedIn ? (
          <>
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </>
        ) : (
            <>
            <Route exact path="/">
              <Mainpage />
            </Route>
          </>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;