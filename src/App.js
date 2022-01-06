import React, { Component } from "react";
import Square from "./components/Square";
import "./App.css";
import Restart from "./components/Restart";

// map to display all the boxes
// flex the boxes/grid
// add emojis for player 1 and player 2
// create functionality for each boxes (onClick, event handling)
// create functionality to switch between player 1 and player 2 -- incrementing state/variable somehow
// logic of how a player wins
// use array to decide who wins with alert
// game ends after winner is decided or all squares selected
// restart button that clears the gameboard
// notification of player 1 and player 2 who's turn -- onClick displays Player 1 when even and player 2 when odd
// search input field that accepts emoji or create radio button
// ❌ , ⭕️

// conditional that evaluates if win condition has already been met. if true, do not activate onClick
// create a method that runs two methods -- one being the win condition, and one that sends alert

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      counter: 0,
      winner1: false,
      winner2: false,
      gameEnd: 0,
    };
  }

  handleEmoji = (index) => {
    let { squares, counter, winner1, winner2 } = this.state;
    if (
      counter % 2 === 0 &&
      squares[index] === "" &&
      winner1 === false &&
      winner2 === false
    ) {
      squares[index] = "⭕️";
      counter++;
      this.setState({ squares: squares, counter: counter });
    } else if (
      counter % 2 !== 0 &&
      squares[index] === "" &&
      winner1 === false &&
      winner2 === false
    ) {
      squares[index] = "❌";
      counter++;
      this.setState({ squares: squares, counter: counter });
    }

    if (
      (squares[0] === "⭕️" && squares[1] === "⭕️" && squares[2] === "⭕️") ||
      (squares[3] === "⭕️" && squares[4] === "⭕️" && squares[5] === "⭕️") ||
      (squares[6] === "⭕️" && squares[7] === "⭕️" && squares[8] === "⭕️") ||
      (squares[0] === "⭕️" && squares[3] === "⭕️" && squares[6] === "⭕️") ||
      (squares[1] === "⭕️" && squares[4] === "⭕️" && squares[7] === "⭕️") ||
      (squares[2] === "⭕️" && squares[5] === "⭕️" && squares[8] === "⭕️") ||
      (squares[0] === "⭕️" && squares[4] === "⭕️" && squares[8] === "⭕️") ||
      (squares[2] === "⭕️" && squares[4] === "⭕️" && squares[6] === "⭕️")
    ) {
      this.setState({ winner1: true });
    } else if (
      (squares[0] === "❌" && squares[1] === "❌" && squares[2] === "❌") ||
      (squares[3] === "❌" && squares[4] === "❌" && squares[5] === "❌") ||
      (squares[6] === "❌" && squares[7] === "❌" && squares[8] === "❌") ||
      (squares[0] === "❌" && squares[3] === "❌" && squares[6] === "❌") ||
      (squares[1] === "❌" && squares[4] === "❌" && squares[7] === "❌") ||
      (squares[2] === "❌" && squares[5] === "❌" && squares[8] === "❌") ||
      (squares[0] === "❌" && squares[4] === "❌" && squares[8] === "❌") ||
      (squares[2] === "❌" && squares[4] === "❌" && squares[6] === "❌")
    ) {
      this.setState({ winner2: true });
    }
    this.winnerMethod();
  };

  winnerMethod = () => {
    let { winner1, winner2, gameEnd } = this.state;
    if (winner1 === true && gameEnd === 0) {
      alert("⭕️ is the winner!!");
      this.setState({ gameEnd: 1 });
    } else if (winner2 === true && gameEnd === 0) {
      alert("❌ is the winner!!");
      this.setState({ gameEnd: 1 });
    }
  };

  restartButton = () => {
    this.setState({
      squares: ["", "", "", "", "", "", "", "", ""],
      counter: 0,
      winner1: false,
      winner2: false,
      gameEnd: 0,
    });
  };
  render() {
    return (
      <>
        <h1>Tic Tac Toe</h1>
        <div className="bigDiv">
          <div className="gameBoard">
            {this.state.squares.map((value, index) => {
              return (
                <Square
                  value={value}
                  key={index}
                  index={index}
                  handleEmoji={this.handleEmoji}
                  winnerMethod={this.winnerMethod}
                />
              );
            })}
          </div>
        </div>
        <div className="restart">
          <Restart restartButton={this.restartButton} />

        </div>
      </>
    );
  }
}
export default App;
