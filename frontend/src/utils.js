export const convertToHour = (timestamp) => {
  var date = new Date(timestamp * 1000);
  date.getTimezoneOffset();
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var formattedTime = hours + ":" + minutes.substr(-2);
  return formattedTime;
};
