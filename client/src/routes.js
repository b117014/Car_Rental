/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { useDispatch } from "react-redux";
import { userGetAction } from "./_redux/action/user";
import LoginView from "./view/LoginView/LoginView";
import RegisterView from "./view/RegisterView/RegisterView";
import { garagesRoute, garageDetailRoute } from "./route";
import GarageView from "./view/GarageView/GarageView";
import GarageDetailView from "./view/GarageDetailView/GarageDetailView";

const RouterContent = (props) => {
  const dispatch = useDispatch();
  const onGetUser = async () => {
    await dispatch(userGetAction());
  };
  useEffect(() => {
    onGetUser();
  }, []);
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={Homepage} /> */}

        <Route exact path="/register" component={RegisterView} />
        <Route exact path="/login" component={LoginView} />
        <Route exact path={garagesRoute()} component={GarageView} />
        <Route exact path={garageDetailRoute(false)} component={GarageDetailView} />
      </Switch>
    </Router>
  );
};

export default RouterContent;
