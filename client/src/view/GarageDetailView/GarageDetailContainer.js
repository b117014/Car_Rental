/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import GarageDetailContent from "./GarageDetailContent";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { garageDetailGetAction } from "../../_redux/action/garage";
import { useEffect } from "react";
import { getDateMonthFormat } from "../../util/dateFormat";

const GarageDetailContainer = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const onGetGarageDetail = async (startDate, endDate) => {
    const query = {
      start_date: startDate,
      end_date: endDate,
    };
    if (params && params.garageId) {
      await dispatch(garageDetailGetAction(query, params.garageId));
    }
  };
  useEffect(() => {
    let startDate = getDateMonthFormat(new Date());
    let endDate = getDateMonthFormat(new Date());
    console.log(startDate);
    onGetGarageDetail(startDate, endDate);
  }, []);
  return <GarageDetailContent />;
};

export default GarageDetailContainer;
