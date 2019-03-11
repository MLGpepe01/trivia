import React, { Component } from "react";
import Question from "./Question";
import { buildFirebase, getRandomQuestion } from "../clients/firebase";

// import components

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: {
        question_text: "Question",
        choices: [],
        correct_choice_index: null
      }
    };

    var firebaseDatabase = buildFirebase();
    firebaseDatabase.ref("/questions").on("value", snapshot => {
      var snapshot = snapshot.val();
      var question = getRandomQuestion(snapshot);
      this.setState({ currentQuestion: question });
    });
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
