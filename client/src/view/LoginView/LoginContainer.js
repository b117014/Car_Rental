import React from "react";
import LoginContent from "./LoginContent";
import { useDispatch } from "react-redux";
import { userLoginAction } from "../../_redux/action/user";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const onUserLogin = async (data) => {
    await dispatch(userLoginAction(data));
  };
  return <LoginContent onUserLogin={onUserLogin} />;
};

export default LoginContainer;
