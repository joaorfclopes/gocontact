import log4js from "log4js";

export const API_URL = "https://api.openweathermap.org/data/2.5";

export const API_ID = "27b9e4428d57b0a1eea478389837b2a1";

var today = new Date();
var date =
  today.getFullYear() +
  "-" +
  ("0" + (today.getMonth() + 1)).slice(-2) +
  "-" +
  ("0" + today.getDate()).slice(-2);

log4js.configure({
  appenders: {
    weather: {
      type: "file",
      filename: `logs/log-${date}.log`,
    },
  },
  categories: { default: { appenders: ["weather"], level: "error" } },
});

const logger = log4js.getLogger("weather");

export const logInfo = (message) => {
  logger.level = "info";
  logger.info(message);
};

export const logError = (message) => {
  logger.level = "error";
  logger.error(message);
};
