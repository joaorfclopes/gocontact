import express from "express";
import weatherRoute from "./routes/weatherRoute.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.use("/api/weather", weatherRoute);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
