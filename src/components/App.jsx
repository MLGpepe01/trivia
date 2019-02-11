import React, { Component } from "react";
import Question from "./Question";
// import components

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: {
        questiontext: "sdfghj",
        answers: ["Un", "Deux", "HI", "Quatre"],
        canswer: 1

      }
    };
  }

  render() {
    return (
      <div className="app">
        <Question currentQuestion={this.state.currentQuestion} />
      </div>
    );
  }
}

export default App;
