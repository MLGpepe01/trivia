import React from "react";
import ReactDOM from "react-dom";
import "./css/App.css";
import App from "./components/App";
ReactDOM.render(<App />, document.getElementById("root"));
/*global $ */
/*global location*/
function timer() {
  var timeleft = 10;
  var downloadTimer = setInterval(function() {
    document.getElementById("progressBar").value = 11 - timeleft;
    timeleft -= 1;
    if (timeleft <= 0) {
      clearInterval(downloadTimer);
    }
    $("#timer").html(timeleft);

    if (timeleft === 0) {
      timer();
    }
  }, 1000);
}

timer();
