import React, { Component } from "react";
// import components
class Answer extends Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.onanswerclick(this.props.index)}>
          {this.props.answertext}
        </button>
      </div>
    );
  }
}

export default Answer;
