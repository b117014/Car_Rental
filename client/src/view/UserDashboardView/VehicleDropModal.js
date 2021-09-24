import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { garagesGetAction } from "../../_redux/action/garage";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    height: "50%",
  },
};
const VehicleDropModal = ({ isModal, onToggleModal, data, onDropVehicle }) => {
  const dispatch = useDispatch();
  const garages = useSelector((state) => state.garage.garages);
  const [selectedGarage, setSelectedGarage] = useState(null);
  const onGetGarages = async () => {
    await dispatch(garagesGetAction());
  };

  useEffect(() => {
    onGetGarages();
  }, []);
  return (
    <Modal
      isOpen={isModal}
      onRequestClose={onToggleModal}
      className="f-modal br-10"
      overlayClassName="f-modal-overlay"
      style={customStyles}
      shouldCloseOnOverlayClick={true}
    >
      <div className="exp-modal ">
        <div className="p-2 text-center">
          <h6>Drop Vehicle</h6>
          <hr />
        </div>
        <div className="p-4">
          <div className="">
            <div className="row">
              <p>
                Garage Name:
                <span className="mx-3">
                  {data && data.garage && data.garage.name}{" "}
                </span>
              </p>
            </div>
            <div className="row">
              <div className="col-6">
                <p>
                  Vehicle Name:
                  <span className="mx-3">
                    {data && data.vehicle && data.vehicle.name}
                  </span>
                </p>
              </div>
              <div className="col-6">
                <p>
                  Vehicle Number:{" "}
                  <span className="mx-3">
                    {data && data.vehicle && data.vehicle.vehicle_number}
                  </span>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <p>
                  Pickup Date:{" "}
                  <span className="mx-3">{data && data.pick_date} </span>
                </p>
              </div>
              <div className="col-6">
                <p>
                  Drop Date:{" "}
                  <span className="mx-3">{data && data.drop_date}</span>{" "}
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-4">
                <label className="Select Garage d-inline">Select Garage</label>
              </div>
              <div className="col-7">
                <select
                  className="form-select "
                  aria-label="Default select example"
                  placeholder="Drop"
                  onChange={(e) => {
                    if (e.target.value === "open") {
                      setSelectedGarage(null);
                    } else {
                      setSelectedGarage(e.target.value);
                    }
                  }}
                >
                  <option selected value="open">
                    Open this select menu
                  </option>
                  {garages &&
                    garages.map((ele, i) => (
                      <option value={ele._id} key={i}>
                        {ele.name}
                      </option>
                    ))}
                </select>
              </div>
            </div>
            <div className="text-center my-4">
              <button
                className="btn btn-primary w-50"
                disabled={selectedGarage ? false : true}
                onClick={() => onDropVehicle(data, selectedGarage)}
              >
                Drop
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default VehicleDropModal;
