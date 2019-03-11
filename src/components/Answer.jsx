import React, { Component } from "react";
// import components
class Answer extends Component {
  render() {
    return (
      <div>
        <span>
          <button onClick={() => this.props.onanswerclick(this.props.index)}>
            {this.props.answertext}
          </button>
        </span>
      </div>
    );
  }
}

export default Answer;
