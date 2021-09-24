/* eslint-disable import/first */
import queryString from "query-string";
const { apiClient } = require("../../../service/apiClient");
const {
  GARAGES_GET_PENDING,
  GARAGES,
  GARAGE_DETAIL,
  VEHICLE_BOOK_PENDING,
  GARAGE_DETAIL_PENDING,
} = require("./type");
const { reduxPayload } = require("../base");

const garagesGetAction = () => {
  const url = "/garages";
  return (dispatch) => {
    dispatch(reduxPayload(GARAGES_GET_PENDING, true));
    apiClient({ method: "GET", url: url })
      .then((res) => {
        dispatch(reduxPayload(GARAGES, res.data));
        dispatch(reduxPayload(GARAGES_GET_PENDING, false));
      })
      .catch((err) => {
        dispatch(reduxPayload(GARAGES_GET_PENDING, false));
      });
  };
};
const garageGetAction = (garageId) => {
  const url = `/garage-info/${garageId}`;
  return apiClient({ method: "GET", url: url });
};

const garageDetailGetAction = (value, garageId) => {
  const query = queryString.stringify(value);
  const url = `/garage/${garageId}?${query}`;
  return (dispatch) => {
    dispatch(reduxPayload(GARAGE_DETAIL_PENDING, true));
    apiClient({ method: "GET", url: url })
      .then((res) => {
        dispatch(reduxPayload(GARAGE_DETAIL, res.data));
        dispatch(reduxPayload(GARAGE_DETAIL_PENDING, false));
      })
      .catch((err) => {
        dispatch(reduxPayload(GARAGE_DETAIL_PENDING, false));
      });
  };
};

const vehicleBookAction = (value, callback) => {
  const url = `/vehicle-book`;
  return (dispatch) => {
    dispatch(reduxPayload(VEHICLE_BOOK_PENDING, true));
    apiClient({ method: "POST", url: url, data: value })
      .then((res) => {
        if (callback) {
          callback();
        }
        dispatch(reduxPayload(VEHICLE_BOOK_PENDING, false));
      })
      .catch((err) => {
        dispatch(reduxPayload(VEHICLE_BOOK_PENDING, false));
      });
  };
};
export {
  garagesGetAction,
  garageDetailGetAction,
  vehicleBookAction,
  garageGetAction,
};
