import React from "react";
import { useDispatch } from "react-redux";
import RegisterContent from "./RegisterContent";
import { userRegisterAction } from "../../_redux/action/user";

const RegisterContainer = () => {
  const dispatch = useDispatch();
  const onUserRegister = async (data) => {
    await dispatch(userRegisterAction(data));
  };
  return <RegisterContent onUserRegister={onUserRegister} />;
};

export default RegisterContainer;
