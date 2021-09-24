/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import UserDashboardContent from "./UserDashboardContent";
import { useDispatch, useSelector } from "react-redux";
import {
  userVehicleBookingSlotGetAction,
  userVehicleDropAction,
} from "../../_redux/action/slot";
import Spinner from "../../component/Spinner";

const UserDashboardContainer = () => {
  const dispatch = useDispatch();
  const isUserSlotGetPending = useSelector(
    (state) => state.userSlot.isUserSlotGetPending
  );
  const isVehicleDropPending = useSelector(
    (state) => state.userSlot.isVehicleDropPending
  );
  const onGetUserSlotBooking = async () => {
    await dispatch(userVehicleBookingSlotGetAction());
  };
  const onDropVehicle = async (value, garageId) => {
    let body = {
      slotId: value._id,
      garageId,
      vehicleId: value.vehicle._id,
    };

    await dispatch(userVehicleDropAction(body, onGetUserSlotBooking));
  };
  useEffect(() => {
    onGetUserSlotBooking();
  }, []);
  return (
    <section>
      <Spinner isLoading={isUserSlotGetPending || isVehicleDropPending} />
      <UserDashboardContent onDropVehicle={onDropVehicle} />{" "}
    </section>
  );
};

export default UserDashboardContainer;
