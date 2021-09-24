import { apiClient } from "../../../service/apiClient";
import {
  USER_LOGIN,
  USER_REGISTER_PENDING,
  USER_LOGIN_PENDING,
  USER_GET_PENDING,
  USER_LOGOUT,
} from "./type";
import { reduxPayload } from "../base";
import { toastAction } from "../toastAction";

const userRegisterAction = (data, callback) => {
  const url = "/user/register";
  return (dispatch) => {
    dispatch(reduxPayload(USER_REGISTER_PENDING, true));
    apiClient({ method: "POST", url: url, data })
      .then((res) => {
        localStorage.setItem("jwtToken", res.data.token);
        dispatch(reduxPayload(USER_LOGIN, res.data));
        dispatch(reduxPayload(USER_REGISTER_PENDING, false));
        if (callback) {
          callback();
        }
        toastAction.success(`Hi ${res.data.name ? res.data.name : ""}`);
      })
      .catch((err) => {
        toastAction.error(err);
        dispatch(reduxPayload(USER_REGISTER_PENDING, false));
      });
  };
};

const userLoginAction = (data, callback) => {
  const url = "/user/login";
  return (dispatch) => {
    dispatch(reduxPayload(USER_LOGIN_PENDING, true));
    apiClient({ method: "POST", url: url, data })
      .then((res) => {
        localStorage.setItem("jwtToken", res.data.token);
        dispatch(reduxPayload(USER_LOGIN, res.data));
        dispatch(reduxPayload(USER_LOGIN_PENDING, false));
        if (callback) {
          callback();
        }
        toastAction.success(`Hi ${res.data.name ? res.data.name : ""}`);
      })
      .catch((err) => {
        toastAction.error(err);

        dispatch(reduxPayload(USER_LOGIN_PENDING, false));
      });
  };
};
const userGetAction = () => {
  const url = "/user";
  return (dispatch) => {
    dispatch(reduxPayload(USER_GET_PENDING, true));
    apiClient({ method: "GET", url: url })
      .then((res) => {
        localStorage.setItem("jwtToken", res.data.token);
        dispatch(reduxPayload(USER_LOGIN, res.data));
        dispatch(reduxPayload(USER_GET_PENDING, false));
      })
      .catch((err) => {
        dispatch(reduxPayload(USER_GET_PENDING, false));
      });
  };
};

const userLogoutAction = () => {
  return (dispatch) => {
    localStorage.clear();
    dispatch(reduxPayload(USER_LOGOUT));
  };
};
export { userLoginAction, userRegisterAction, userLogoutAction, userGetAction };
