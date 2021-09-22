import { combineReducers } from "redux";
import { USER_LOGOUT } from "../action/type";
import { userReducer } from "./user";


const appReducer = combineReducers({
  user: userReducer,
  
});

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;
