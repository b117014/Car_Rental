import { combineReducers } from "redux";
import { USER_LOGOUT } from "../action/user/type";
import { userReducer } from "./user";
import { garageReducer } from "./garage";
import { userSlotReducer } from "./userSlot";

const appReducer = combineReducers({
  user: userReducer,
  garage: garageReducer,
  userSlot: userSlotReducer,
});

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT) {
    state = undefined;
  }
  return appReducer(state, action);
};
export default rootReducer;
