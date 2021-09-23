import React from "react";
import { useSelector } from "react-redux";
import { useFormik } from "formik";

const GarageDetailContent = () => {
  const formik = useFormik({
    initialValues: { startDate: new Date(), endDate: new Date() },
    onSubmit: (value) => {
      console.log(value);
    },
  });
  const garageDetail = useSelector((state) => state.garage.garageDetail);
  return (
    <div className="p-4">
      <div className="">
        <nav className="nav">
          <div className="row" style={{ display: "contents" }}>
            <div className="col-5">
              <h4>Garage 1</h4>
            </div>
            <div className="col-7 d-flex justify-content-end">
              <div className="d-flex gap-10">
                <div className="">
                  <label>Start Dates</label>
                  <input
                    type="date"
                    name="startDate"
                    value={formik.values.startDate}
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
                    value={formik.values.endDate}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                    className="form-control"
                  />
                </div>
                <div className="align-self-end">
                  <button className="btn btn-primary">Search</button>
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
                <div className=" shadow">
                  <img src="/images/car.jpg" alt="" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GarageDetailContent;
