import React, { Component } from "react";
import QuestionText from "./QuestionText.jsx";
import Reset from "./Reset.jsx";
import Answer from "./Answer.jsx";

// import components

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questioncolor: this.props.currentQuestion.questionxolor,
      questiontext: this.props.currentQuestion.questiontext
    };
  }
  handleClick(index) {
    var ca = this.props.currentQuestion.canswer;
    if (index === ca) {
      this.setState({ questiontext: "correct answer" });
      this.setState({ questioncolor: "green" });
    } else if (index !== ca) {
      this.setState({ questiontext: "Wrong!" });
      this.setState({ questioncolor: "red" });
    }
  }

  render() {
    return (
      <div>
        <QuestionText
          color={this.state.questioncolor}
          questiontext={this.state.questiontext}
        />
        <Answer
          answertext={this.props.currentQuestion.answers[0]}
          onanswerclick={index => this.handleClick(index)}
          index={0}
        />
        <Answer
          answertext={this.props.currentQuestion.answers[1]}
          onanswerclick={index => this.handleClick(index)}
          index={1}
        />
        <Answer
          answertext={this.props.currentQuestion.answers[2]}
          onanswerclick={index => this.handleClick(index)}
          index={2}
        />
        <Answer
          answertext={this.props.currentQuestion.answers[3]}
          onanswerclick={index => this.handleClick(index)}
          index={3}
        />
        <Reset />
      </div>
    );
  }
}

export default Question;
