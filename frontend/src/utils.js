export const countryWhiteList = ["PT"];

export const toArray = (str) => {
  const res = str.split("|");
  return res;
};

export const formatArrayValues = (arr) => {
  let finalArray = [];
  arr.map((val) => finalArray.push(val.split("~").shift()));
  return finalArray;
};
