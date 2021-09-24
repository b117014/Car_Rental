/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import GarageDetailContent from "./GarageDetailContent";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  garageDetailGetAction,
  vehicleBookAction,
} from "../../_redux/action/garage";
import { useEffect } from "react";
import { getDateMonthFormat } from "../../util/dateFormat";

const GarageDetailContainer = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const onGetGarageDetail = async (startDate, endDate) => {
    const query = {
      start_date: getDateMonthFormat(startDate),
      end_date: getDateMonthFormat(endDate),
    };
    if (params && params.garageId) {
      await dispatch(garageDetailGetAction(query, params.garageId));
    }
  };
  const onVehicleBook = async (value, startDate, endDate) => {
    let body = {
      startDate: getDateMonthFormat(startDate),
      endDate: getDateMonthFormat(endDate),
      vehicleId: value._id,
      garageId: params.garageId,
    };
    await dispatch(vehicleBookAction(body));
  };
  useEffect(() => {
    let startDate = new Date();
    let endDate = new Date();
    onGetGarageDetail(startDate, endDate);
  }, []);
  return (
    <GarageDetailContent
      onVehicleBook={onVehicleBook}
      onGetGarageDetail={onGetGarageDetail}
    />
  );
};

export default GarageDetailContainer;
