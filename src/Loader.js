import React from "react";
import ACNHplane from "../src/plane-img/plane.png";

export default function Loader() {
  return (
    <div className="body">
      <div className="main-content">
        <div className="background-1"></div>
        <div className="background-2"></div>
        <img src={ACNHplane} alt="ACNH plane" />
      </div>
    </div>
  );
}
