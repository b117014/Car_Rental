import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { getDateMonthFormat } from "../../util/dateFormat";
import { useEffect } from "react";
import { garageGetAction } from "../../_redux/action/garage";

const GarageDetailContent = ({
  onVehicleBook,
  onGetGarageDetail,
  garageId,
}) => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [garageData, setGarageData] = useState(null);
  const formik = useFormik({
    initialValues: { startDate: new Date(), endDate: new Date() },
    onSubmit: (value) => {
      onGetGarageDetail(value.startDate, value.endDate);
      setSelectedVehicle(null);
    },
  });
  const garageDetail = useSelector((state) => state.garage.garageDetail);

  const onGetGarage = async () => {
    try {
      let res = await garageGetAction(garageId);
      setGarageData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    onGetGarage();
  }, []);
  return (
    <div className="p-4">
      <div className="">
        <nav className="nav">
          <div className="row" style={{ display: "contents" }}>
            <div className="col-5">
              <h4>{garageData && garageData.name}</h4>
            </div>
            <div className="col-7 d-flex justify-content-end">
              <div className="d-flex gap-10">
                <div className="">
                  <label>Start Dates</label>
                  <input
                    type="date"
                    name="startDate"
                    value={getDateMonthFormat(formik.values.startDate)}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                    className="form-control"
                  />
                </div>
                <div className="">
                  <label>Drop Dates</label>
                  <input
                    type="date"
                    name="endDate"
                    value={getDateMonthFormat(formik.values.endDate)}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                    className="form-control"
                  />
                </div>
                <div className="align-self-end">
                  <button
                    className="btn btn-primary"
                    onClick={formik.handleSubmit}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="row my-3">
        {garageDetail &&
          garageDetail.map((ele, i) => (
            <div className="col-3 my-2" key={i}>
              <div className="">
                <div
                  className={`shadow ${
                    selectedVehicle &&
                    selectedVehicle._id === ele._id &&
                    "border-col"
                  }`}
                  onClick={() => setSelectedVehicle(ele)}
                >
                  <div className="">
                    <img src="/images/car.jpg" alt="" />
                  </div>
                  <div className="row px-2">
                    <div className="col-6">
                      <small className="font-14">{ele && ele.name}</small>
                    </div>
                    <div className="col-6 text-end">
                      <small className="font-14">{ele && ele.vehicle_number}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      {selectedVehicle && (
        <div className="book-btn">
          <button
            className="btn"
            onClick={() =>
              onVehicleBook(
                selectedVehicle,
                formik.values.startDate,
                formik.values.endDate
              )
            }
          >
            Book
          </button>
        </div>
      )}
    </div>
  );
};

export default GarageDetailContent;
