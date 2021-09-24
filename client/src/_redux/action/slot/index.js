const { apiClient } = require("../../../service/apiClient");
const { reduxPayload } = require("../base");
const { USER_VEHICLE_SLOT_PENDING, USER_VEHICLE_SLOT } = require("./type");

const userVehicleBookingSlotGetAction = () => {
  const url = `/user/vehicle-booked`;
  return (dispatch) => {
    dispatch(reduxPayload(USER_VEHICLE_SLOT_PENDING, true));
    apiClient({ method: "GET", url: url })
      .then((res) => {
        dispatch(reduxPayload(USER_VEHICLE_SLOT, res.data));
        dispatch(reduxPayload(USER_VEHICLE_SLOT_PENDING, false));
      })
      .catch((err) => {
        dispatch(reduxPayload(USER_VEHICLE_SLOT_PENDING, false));
      });
  };
};

const userVehicleDropAction = (value, callback) => {
  const url = `/vehicle-drop`;
  return (dispatch) => {
    dispatch(reduxPayload(USER_VEHICLE_SLOT_PENDING, true));
    apiClient({ method: "PUT", url: url, data: value })
      .then((res) => {
        dispatch(reduxPayload(USER_VEHICLE_SLOT_PENDING, false));
        if (callback) {
          callback();
        }
      })
      .catch((err) => {
        dispatch(reduxPayload(USER_VEHICLE_SLOT_PENDING, false));
      });
  };
};
export { userVehicleBookingSlotGetAction, userVehicleDropAction };
