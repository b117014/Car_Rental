/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import GarageContent from "./GarageContent";
import { useDispatch } from "react-redux";
import { garagesGetAction } from "../../_redux/action/garage";
import { useEffect } from "react";

const GarageContainer = () => {
  const dispatch = useDispatch();

  const onGaragesGet = async () => {
    await dispatch(garagesGetAction());
  };
  useEffect(() => {
    onGaragesGet();
  }, []);
  return <GarageContent />;
};

export default GarageContainer;
