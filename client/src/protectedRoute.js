import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import SideTab from "./component/SideTab/SideTab";

const ProtectedRoute = ({ accessType, type }) => {
  const history = useHistory();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const user = useSelector((state) => state.user.user);
  const isUserGetPending = useSelector((state) => state.user.isUserGetPending);
  const onRenderComponent = (type) => {
    switch (type) {
    }
  };
  if (isAuthenticated && user) {
    return (
      <div className="overflow-x-h">
        <div className="row">
          <div className="col-2">
            <SideTab />
          </div>
          <div className="col-10" id="user-container">
            <div className="container">
              <nav className="d-flex justify-content-between my-2">
                <div className="d-flex gap-15">
                  <div className="">
                    <button className="share-btn px-4 py-1 rounded">
                      <i class="fad fa-share-alt mr-1"></i> Logout
                    </button>
                  </div>
                  <div className="">
                    <i class="fa fa-bookmark" aria-hidden="true"></i>
                  </div>
                  <div className="">
                    <i class="fa fa-bell" aria-hidden="true"></i>
                  </div>
                  <div className="">
                    <div className="">
                      <img
                        src="/images/profile.png"
                        className="rounded"
                        style={{ height: "35px" }}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </nav>
              <div className="">{onRenderComponent(type)}</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (
    (isAuthenticated === null || user === null) &&
    isUserGetPending === false
  ) {
    history.push("/");
    return <div> </div>;
  } else {
    return <div></div>;
  }
};

export default ProtectedRoute;
