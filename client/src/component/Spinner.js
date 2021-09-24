import React from "react";

const Spinner = ({ isLoading }) => {
  return (
    <div className="">
      {isLoading && (
        <div className="loading-overlay">
          <span className="fas fa-spinner fa-3x fa-spin"></span>
        </div>
      )}
    </div>
  );
};

export default Spinner;
