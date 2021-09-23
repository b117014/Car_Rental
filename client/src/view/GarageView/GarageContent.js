import React from "react";
import GarageCard from "./GarageCard";

const data = [
  {
    name: "Garage 1",
    city: "Pune",
  },
  {
    name: "Garage 2",
    city: "Pune",
  },
  {
    name: "Garage 3",
    city: "Pune",
  },
];
const GarageContent = () => {
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
