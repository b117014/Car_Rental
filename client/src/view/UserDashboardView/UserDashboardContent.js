import React from "react";
import { getDateMonthFormat } from "../../util/dateFormat";
import { useSelector } from "react-redux";
import { useState } from "react";
import VehicleDropModal from "./VehicleDropModal";

const UserDashboardContent = ({ onDropVehicle }) => {
  const data = useSelector((state) => state.userSlot.userSlot);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [isModal, setModal] = useState(false);

  const onToggleModal = () => {
    setModal(!isModal);
  };
  const onDropUserVehicle = (value, garageId) => {
    onDropVehicle(value, garageId);
    onToggleModal();
  };
  return (
    <div className="p-2" id="dashboard">
      <div className="card shadow rounded ">
        <table className="table p-2">
          <thead className="table-light">
            <tr className="px-2">
              <th>Garage</th>
              <th>Vehicle Name</th>
              <th>Vehicle no.</th>
              <th>Pickup Date</th>
              <th>Drop Date</th>
              <th>Drop Status</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((ele, i) => (
                <tr key={i} className="px-2">
                  <td>
                    <div className="d-inline mx-2">
                      {ele && ele.garage && ele.garage.name}
                    </div>
                  </td>
                  <td>{ele && ele.vehicle && ele.vehicle.name}</td>
                  <td>{ele && ele.vehicle && ele.vehicle.vehicle_number}</td>
                  <td>
                    {ele && ele.pick_date && getDateMonthFormat(ele.pick_date)}
                  </td>
                  <td>
                    {ele && ele.drop_date && getDateMonthFormat(ele.drop_date)}
                  </td>
                  <td>
                    {ele && ele.is_dropped ? (
                      <div className="">Dropped</div>
                    ) : (
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          onToggleModal();
                          setSelectedVehicle(ele);
                        }}
                      >
                        Drop
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <VehicleDropModal
        data={selectedVehicle}
        isModal={isModal}
        onToggleModal={onToggleModal}
        onDropVehicle={onDropUserVehicle}
      />
    </div>
  );
};

export default UserDashboardContent;
