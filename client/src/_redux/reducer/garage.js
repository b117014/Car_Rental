import {
  GARAGES,
  GARAGES_GET_PENDING,
  GARAGE_DETAIL,
  GARAGE_DETAIL_PENDING,
  GARAGE_ERROR,
  VEHICLE_BOOK_PENDING,
} from "../action/garage/type";

const DEFAULT_STATE = {
  garages: null,
  garageDetail: null,
  isGaragesGetPending: null,

  isGarageDetailGetPending: null,
  isVehicleBookPending: null,
  error: null,
};

export const garageReducer = (
  state = DEFAULT_STATE,
  { type, payload, error }
) => {
  switch (type) {
    case GARAGES:
      return {
        ...state,
        garages: payload,
      };

    case GARAGES_GET_PENDING:
      return {
        ...state,
        isGaragesGetPending: payload,
      };
    case GARAGE_DETAIL:
      return {
        ...state,
        garageDetail: payload,
      };

    case GARAGE_DETAIL_PENDING:
      return {
        ...state,
        isGarageDetailGetPending: payload,
      };
    case VEHICLE_BOOK_PENDING:
      return {
        ...state,
        isVehicleBookPending: payload,
      };
    case GARAGE_ERROR:
      return {
        ...state,
        error,
      };
    default:
      return state;
  }
};
