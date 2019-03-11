import React, { Component } from "react";
// import components

class QuestionText extends Component {
  render() {
    return (
      <div class="question">
        <font color={this.props.color}>{this.props.question_text}</font>
      </div>
    );
  }
}
export default QuestionText;
