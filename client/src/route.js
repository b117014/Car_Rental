export const garagesRoute = () => {
  return "/garage";
};

export const garageDetailRoute = (isParams, garageId) => {
  if (isParams) {
    return `/garage/${garageId}`;
  }
  return "/garage/:garageId";
};
