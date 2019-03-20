import React, { Component } from "react";
// import components

class Score extends Component {
  render() {
    return (
      <div>
        <div className="scorebored">
          <div className="canswer">
            <font>a{this.props.acor}a</font>
          </div>
          <div className="ranswer" />
        </div>
      </div>
    );
  }
}

export default Score;
