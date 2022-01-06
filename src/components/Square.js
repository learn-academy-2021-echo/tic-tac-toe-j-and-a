import React, { Component } from "react";

class Square extends Component {
  handleTurn = () => {
    this.props.handleEmoji(this.props.index);
  };

  render() {
    return (
      <>
        <div
          onClick={() => {
            this.handleTurn();
          }}
          className="square"
        >
          {this.props.value}
        </div>
      </>
    );
  }
}
export default Square;
