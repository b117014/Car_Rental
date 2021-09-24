import {
  USER_VEHICLE_SLOT,
  USER_VEHICLE_SLOT_PENDING,
  USER_VEHICLE_ERROR,
  VEHICLE_DROP_PENDING,
} from "../action/slot/type";

const DEFAULT_STATE = {
  userSlot: null,
  isUserSlotGetPending: false,
  isVehicleDropPending: false,
  error: null,
};

export const userSlotReducer = (
  state = DEFAULT_STATE,
  { type, payload, error }
) => {
  switch (type) {
    case USER_VEHICLE_SLOT:
      return {
        ...state,
        userSlot: payload,
      };

    case USER_VEHICLE_SLOT_PENDING:
      return {
        ...state,
        isUserSlotGetPending: payload,
      };
    case VEHICLE_DROP_PENDING:
      return {
        ...state,
        isVehicleDropPending: payload,
      };

    case USER_VEHICLE_ERROR:
      return {
        ...state,
        error,
      };
    default:
      return state;
  }
};
