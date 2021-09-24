/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import UserDashboardContent from "./UserDashboardContent";
import { useDispatch } from "react-redux";
import { userVehicleBookingSlotGetAction } from "../../_redux/action/slot";

const UserDashboardContainer = () => {
  const dispatch = useDispatch();
  const onGetUserSlotBooking = async () => {
    await dispatch(userVehicleBookingSlotGetAction());
  };
  useEffect(() => {
    onGetUserSlotBooking();
  }, []);
  return <UserDashboardContent />;
};

export default UserDashboardContainer;
