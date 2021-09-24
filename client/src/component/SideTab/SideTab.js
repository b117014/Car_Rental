import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogoutAction } from "../../_redux/action/user";

const SideTab = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onChangeDashboardRoute = () => {
    history.push("/dashboard");
  };
  const onChangeGarageRoute = () => {
    history.push("/garage");
  };

  const onUserLogout = async () => {
    await dispatch(userLogoutAction());
    history.push("/login");
  };
  return (
    <nav className="side-nav shadow " id="side-nav">
      <div className="">
        <div className="logo text-center my-3">
          <h4>Car Rental</h4>
        </div>
        <div className="p-4 d-flex justify-content-center">
          <div className="">
            <div
              className="my-4 cursor-pointer l"
              onClick={onChangeDashboardRoute}
            >
              <i class="fas fa-chart-pie-alt d-inline white-col"></i>
              <p className="mx-3 d-inline white-col">Dashboard</p>
            </div>
            <div
              className="my-4 cursor-pointer white-col"
              onClick={onChangeGarageRoute}
            >
              <i class="fas fa-garage-car"></i>
              <p className="mx-3 d-inline white-col">Garage</p>
            </div>

            <div className="my-4 cursor-pointer" onClick={onUserLogout}>
              <i class="fas fa-sign-out white-col"></i>{" "}
              <p className="mx-2 d-inline white-col">Logout</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideTab;
