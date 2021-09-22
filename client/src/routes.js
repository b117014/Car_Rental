/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { useDispatch } from "react-redux";
import { userGetAction } from "./_redux/action/user";
import LoginView from "./view/LoginView/LoginView";

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
        {/* <Route exact path="/" component={Homepage} />

        <Route exact path="/register" component={RegisterPage} /> */}
        <Route exact path="/login" component={LoginView} />
      </Switch>
    </Router>
  );
};

export default RouterContent;
