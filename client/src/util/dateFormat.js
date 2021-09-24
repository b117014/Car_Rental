import moment from "moment";

const getDateMonthFormat = (data) => {
  if (data) {
    let date = new Date(data);
    date = moment(date).format("YYYY-MM-DD");
    return date;
  }
};

export { getDateMonthFormat };
