import express from "express";
import got from "got";
import { API_URL, API_ID, logInfo, logError } from "../utils.js";

const weatherRoute = express.Router();

weatherRoute.get("/:city", (req, res) => {
  (async () => {
    try {
      const response = await got(
        `${API_URL}/weather?q=${req.params.city}&APPID=${API_ID}`
      );
      logInfo(response.body);
      res.json({ body: JSON.parse(response.body) });
    } catch (error) {
      logError(error.response.body);
      res.json({ body: JSON.parse(error.response.body) });
    }
  })();
});

export default weatherRoute;
