import React from "react";
import ReactDOM from "react-dom";
import "./css/App.css";
import App from "./components/App";
ReactDOM.render(<App />, document.getElementById("root"));
var timeleft = 10;
var downloadTimer = setInterval(function() {
  document.getElementById("progressBar").value = 10 - timeleft;
  timeleft -= 1;
  if (timeleft <= 0) clearInterval(downloadTimer);
}, 1000);
if (timeleft <= 0) window.location.reload(true);
