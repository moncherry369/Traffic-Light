//import react into the bundle
import React, { useState, useEffect } from "react";
import ReactDOM, { render } from "react-dom";
// include your styles into the webpack bundle
import "../styles/index.scss";
//import your own components
import Home from "./component/home.jsx";
//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
function TrafficLight() {
  const [state, setState] = useState();
  const [light, setLight] = useState(true);
  const toggleLight = () => {
    setLight((curr) => (curr == state ? "" : state));
  };
  let selectedColor = "selected";
  let redColor = "";
  let yellowColor = "";
  let greenColor = "";
  if (state == "red") {
    redColor = selectedColor;
  }
  if (state == "yellow") {
    yellowColor = selectedColor;
  }
  if (state == "green") {
    greenColor = selectedColor;
  }
  console.log(state);
  return (
    <>
      <div id="top"></div>
      <div id="container">
        <div
          className={`red light ${redColor}`}
          onClick={() => setState("red")}
        ></div>
        <div
          className={`yellow light ${yellowColor}`}
          onClick={() => setState("yellow")}
        ></div>
        <div
          className={`green light ${greenColor}`}
          onClick={() => setState("green")}
        ></div>
      </div>
    </>
  );
}
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));