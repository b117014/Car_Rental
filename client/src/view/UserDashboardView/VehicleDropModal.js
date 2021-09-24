import React from "react";
import Modal from "react-modal";
import { useFormik } from "formik";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "40%",
    height: '70%'
  },
};
const VehicleDropModal = ({ isModal, onToggleModal }) => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: (val) => {
      onToggleModal();
    },
  });
  return (
    <Modal
      isOpen={isModal}
      onRequestClose={onToggleModal}
      className="f-modal br-10"
      overlayClassName="f-modal-overlay"
      style={customStyles}
      shouldCloseOnOverlayClick={false}
    >
      <div className="exp-modal ">
        <div className="p-2 text-center">
          <h6>Drop Vehicle</h6>
          <hr />
        </div>
        <div className="container"></div>
      </div>
    </Modal>
  );
};

export default VehicleDropModal;
