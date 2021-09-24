export const garagesRoute = () => {
  return "/garage";
};
export const dashboardRoute = () => {
  return "/dashboard";
};

export const garageDetailRoute = (isParams, garageId) => {
  if (isParams) {
    return `/garage/${garageId}`;
  }
  return "/garage/:garageId";
};
