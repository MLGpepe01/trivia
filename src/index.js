import React from "react";
import ReactDOM from "react-dom";
import "./css/App.css";
import App from "./components/App";
ReactDOM.render(<App />, document.getElementById("root"));
/*global $ */
var timeleft = 10;
var downloadTimer = setInterval(function() {
  document.getElementById("progressBar").value = 11 - timeleft;
  timeleft -= 1;
  if (timeleft <= 0) clearInterval(downloadTimer);
  console.log(timeleft);
  console.log(timeleft);
  $("#tmier").html(timeleft);
}, 1000);
