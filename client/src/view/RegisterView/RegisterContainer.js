import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RegisterContent from "./RegisterContent";
import { userRegisterAction } from "../../_redux/action/user";
import Spinner from "../../component/Spinner";
import { useHistory } from "react-router-dom";

const RegisterContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isRegisterPending = useSelector(
    (state) => state.user.isRegisterPending
  );
  const onChangeRoute = () => {
    history.push("/dashboard");
  };
  const onUserRegister = async (data) => {
    await dispatch(userRegisterAction(data, onChangeRoute));
  };
  return (
    <section>
      <Spinner isLoading={isRegisterPending} />
      <RegisterContent onUserRegister={onUserRegister} />{" "}
    </section>
  );
};

export default RegisterContainer;
