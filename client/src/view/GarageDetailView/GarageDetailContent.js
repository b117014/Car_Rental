import React from "react";

const GarageDetailContent = () => {
  return (
    <div className="">
      <div className="row">
        {[1, 2, 3, 4, 5].map((ele, i) => (
          <div className="" key={i}>
            <div className=""> </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GarageDetailContent;
