import React from "react";
import { getDateMonthFormat } from "../../util/dateFormat";

const UserDashboardContent = () => {
  const data = [];
  return (
    <div className="">
      <div className="card shadow rounded ">
        <table className="table">
          <thead className="table-light">
            <tr className="px-2">
              <th>Garage</th>
              <th>Vehicle Name</th>
              <th>Vehicle no.</th>
              <th>Pickup Date</th>
              <th>Drop Date</th>
              <th></th>
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
                    {ele &&
                      ele.pickup_date &&
                      getDateMonthFormat(ele.pickup_date)}
                  </td>
                  <td>
                    {ele && ele.drop_date && getDateMonthFormat(ele.drop_date)}
                  </td>
                  <td></td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDashboardContent;
