import React from "react";
import GarageCard from "./GarageCard";
import { useSelector } from "react-redux";

const GarageContent = () => {
  const data = useSelector((state) => state.garage.garages);
  return (
    <div className="">
      <div className="p-4">
        <div className="row">
          {data &&
            data.map((ele, i) => (
              <div className="col-4" key={i}>
                <GarageCard data={ele} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default GarageContent;
