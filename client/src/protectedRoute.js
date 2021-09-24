import React from "react";
import { useSelector } from "react-redux";
import SideTab from "./component/SideTab/SideTab";
import { routeType } from "./constant/route_constant";
import GarageView from "./view/GarageView/GarageView";
import GarageDetailView from "./view/GarageDetailView/GarageDetailView";
import UserDashboardView from "./view/UserDashboardView/UserDashboardView";

const ProtectedRoute = ({ accessType, type }) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const user = useSelector((state) => state.user.user);
  const isUserGetPending = useSelector((state) => state.user.isUserGetPending);
  console.log(isUserGetPending);
  const onRenderComponent = (type) => {
    switch (type) {
      case routeType.GARAGE_LIST_VIEW:
        return <GarageView />;
      case routeType.GARAGE_VIEW:
        return <GarageDetailView />;
      case routeType.DASHBOARD_VIEW:
        return <UserDashboardView />;
      default:
        return <></>;
    }
  };
  // if (isAuthenticated && user) {
  return (
    <div className="overflow-x-h">
      <div className="row">
        <div className="col-2">
          <SideTab />
        </div>
        <div className="col-10" id="user-container">
          <div className="">
            <nav className="d-flex justify-content-between my-2">
              <div className="d-flex gap-15">
                <div className="">
                  <button className="share-btn px-4 py-1 rounded">
                    <i class="fad fa-share-alt mr-1"></i> Logout
                  </button>
                </div>

               
              </div>
            </nav>
            <div className="">{onRenderComponent(type)}</div>
          </div>
        </div>
      </div>
    </div>
  );
  // } else if (
  //   (isAuthenticated === null || user === null) &&
  //   isUserGetPending === false
  // ) {
  //   history.push("/");
  //   return <div> </div>;
  // } else {
  //   return <div></div>;
  // }
};

export default ProtectedRoute;
