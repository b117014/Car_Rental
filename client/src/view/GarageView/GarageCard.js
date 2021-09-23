import React from "react";

const GarageCard = ({ data }) => {
  return (
    <div className="p-2">
      <div className="card shadow rounded">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQryAobxomBx4B7mAvAlsPfND9ALsZ-yPBiPA&usqp=CAU"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <p class="card-text">{data && data.name}</p>
          <div className="">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <span className="mx-2">{data && data.city}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GarageCard;
