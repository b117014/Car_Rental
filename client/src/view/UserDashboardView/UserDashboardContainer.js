/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import UserDashboardContent from "./UserDashboardContent";
import { useDispatch } from "react-redux";
import {
  userVehicleBookingSlotGetAction,
  userVehicleDropAction,
} from "../../_redux/action/slot";

const UserDashboardContainer = () => {
  const dispatch = useDispatch();
  const onGetUserSlotBooking = async () => {
    await dispatch(userVehicleBookingSlotGetAction());
  };
  const onDropVehicle = async (value) => {
    await dispatch(userVehicleDropAction(value));
  };
  useEffect(() => {
    onGetUserSlotBooking();
  }, []);
  return <UserDashboardContent onDropVehicle={onDropVehicle} />;
};

export default UserDashboardContainer;
