import React from "react";
import sun from "../assets/sun.svg";

export default function Loading() {
  return (
    <div className="loading">
      <img className="spinner" src={sun} alt="spinner" />
    </div>
  );
}
