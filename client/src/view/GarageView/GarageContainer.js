/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import GarageContent from "./GarageContent";
import { useDispatch } from "react-redux";
import { garagesGetAction } from "../../_redux/action/garage";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { garageDetailRoute } from "../../route";

const GarageContainer = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onGaragesGet = async () => {
    await dispatch(garagesGetAction());
  };
  const onChangeGarageDetailRoute = (garageId) => {
    let url = garageDetailRoute(true, garageId);
    history.push(url);
  };
  useEffect(() => {
    onGaragesGet();
  }, []);
  return (
    <GarageContent onChangeGarageDetailRoute={onChangeGarageDetailRoute} />
  );
};

export default GarageContainer;
