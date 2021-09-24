/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import GarageDetailContent from "./GarageDetailContent";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  garageDetailGetAction,
  vehicleBookAction,
} from "../../_redux/action/garage";
import { useEffect } from "react";
import { getDateMonthFormat } from "../../util/dateFormat";
import Spinner from "../../component/Spinner";

const GarageDetailContainer = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const isGarageDetailGetPending = useSelector(
    (state) => state.garage.isGarageDetailGetPending
  );
  const isVehicleBookPending = useSelector(
    (state) => state.garage.isVehicleBookPending
  );
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
    const onCallBack = () => onGetGarageDetail(startDate, endDate);
    await dispatch(vehicleBookAction(body, onCallBack));
  };
  useEffect(() => {
    let startDate = new Date();
    let endDate = new Date();
    onGetGarageDetail(startDate, endDate);
  }, []);

  return (
    <section>
      <GarageDetailContent
        onVehicleBook={onVehicleBook}
        onGetGarageDetail={onGetGarageDetail}
        garageId={params.garageId}
      />
      <Spinner isLoading={isGarageDetailGetPending || isVehicleBookPending} />
    </section>
  );
};

export default GarageDetailContainer;
