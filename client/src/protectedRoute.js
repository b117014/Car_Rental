import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";


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

    return onRenderComponent(type);
  } else if (
    (isAuthenticated === null || user === null) &&
    isUserGetPending === false
  ) {
   

    history.push("/");
    return <div> </div>;
  } else {
    

    return <PageSpinner />;
  }
};

export default ProtectedRoute;
