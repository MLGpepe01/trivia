import React, { Component } from "react";
import QuestionText from "./QuestionText.jsx";
import Reset from "./Reset.jsx";
import Answer from "./Answer.jsx";
import Score from "./score.jsx";

// import components

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questioncolor: this.props.currentQuestion.questioncolor,
      question_text: this.props.currentQuestion.question_text,
      scorebored: this.props.scorebored
    };
  }
  handleClick(index) {
    var ca = this.props.currentQuestion.correct_choice_index;
    var cnum = 0;

    var rnum = 0;
    if (index === ca) {
      this.setState({ questiontext: "correct answer" });
      this.setState({ questioncolor: "green" });
      this.setState({ uscore: cnum++ + 1 });
      console.log(cnum);
    } else if (index !== ca) {
      this.setState({ questiontext: "Wrong!" });
      this.setState({ questioncolor: "red" });
      this.setState({ uscore: rnum++ + 1 });
      console.log(rnum);
    }
  }

  render() {
    return (
      <div>
        <QuestionText
          color={this.state.questioncolor}
          question_text={this.props.currentQuestion.question_text}
        />
        <div class="buckets">
          <Answer
            answertext={this.props.currentQuestion.choices[0]}
            onanswerclick={index => this.handleClick(index)}
            index={0}
          />
          <Answer
            answertext={this.props.currentQuestion.choices[1]}
            onanswerclick={index => this.handleClick(index)}
            index={1}
          />
          <Answer
            answertext={this.props.currentQuestion.choices[2]}
            onanswerclick={index => this.handleClick(index)}
            index={2}
          />
          <Answer
            answertext={this.props.currentQuestion.choices[3]}
            onanswerclick={index => this.handleClick(index)}
            index={3}
          />
        </div>
        <Reset />
        <Score />
      </div>
    );
  }
}

export default Question;
