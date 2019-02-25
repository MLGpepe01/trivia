import React, { Component } from "react";
// import components

class QuestionText extends Component {
  render() {
    return (
      <div>
        <font color={this.props.color}>{this.props.questiontext}</font>
      </div>
    );
  }
}
export default QuestionText;
