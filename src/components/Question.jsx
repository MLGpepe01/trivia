import React, { Component } from "react";
import QuestionText from "./QuestionText.jsx";
import Reset from "./Reset.jsx";
import Answer from "./Answer.jsx";
import Score from "./score.jsx";

// import components
var can = 0;
var ran = 0;
class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questioncolor: this.props.currentQuestion.questioncolor,
      question_text: this.props.currentQuestion.question_text,
      cscorebored: this.props.cscorebored,
      rscorebored: this.props.rcorebored
    };
  }
  handleClick(index) {
    var ca = this.props.currentQuestion.correct_choice_index;

    if (index === ca) {
      var tca = can++ + 1;
      this.setState({ questiontext: "correct answer" });
      this.setState({ questioncolor: "green" });
      this.setState({ cscorebored: tca });

      console.log(tca + "corect");
    } else if (index !== ca) {
      var tra = ran++ + 1;
      this.setState({ questiontext: "Wrong!" });
      this.setState({ cquestioncolor: "red" });
      this.setState({ rscorebored: tra });
      console.log(tra + " rong");
    }
  }

  render() {
    return (
      <div>
        <QuestionText
          color={this.state.questioncolor}
          question_text={this.props.currentQuestion.question_text}
        />
        <div className="buckets">
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
