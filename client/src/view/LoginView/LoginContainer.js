import React from "react";
import LoginContent from "./LoginContent";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAction } from "../../_redux/action/user";
import Spinner from "../../component/Spinner";
import { useHistory } from "react-router-dom";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const isLoginPending = useSelector((state) => state.user.isLoginPending);
  const history = useHistory();
  const onChangeRoute = () => {
    history.push("/dashboard");
  };
  const onUserLogin = async (data) => {
    await dispatch(userLoginAction(data, onChangeRoute));
  };
  return (
    <section>
      <Spinner isLoading={isLoginPending} />
      <LoginContent onUserLogin={onUserLogin} />
    </section>
  );
};

export default LoginContainer;
