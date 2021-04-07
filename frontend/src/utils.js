export const getDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date;
};

export const getOffset = (timezone) => {
  const offset = timezone / 3600;
  return offset;
};

export const calcTime = (date, offset) => {
  const utc = date.getTime() + date.getTimezoneOffset() * 60000;
  const nd = new Date(utc + 3600000 * offset);
  const formattedDate = nd.toLocaleTimeString().slice(0, -3);
  return formattedDate;
};
