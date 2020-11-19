import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import kys2 from "./Images/kys2.svg";
import App from "./App";
import "./Opening.css";

function Opening() {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push("/homepage");
    }, 3800);
  });

  return (
    <div className="opening">
      <object
        className="swirl-out-bck"
        type="image/svg+xml"
        data={kys2}
      ></object>
    </div>
  );
}

export default Opening;
