import React, { Component } from "react";
import Square from "./components/Square";
import "./App.css";

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
// ❌ , 〇


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: ["","","","","","","","",""],
      counter: 0
    };
  }

  handleEmoji = (index) => {
    let { squares, counter } = this.state
    if (counter % 2 === 0) {
      squares[index] = "〇"
      counter++
      this.setState({ squares: squares, counter: counter})
    } else if (counter % 2 !== 0) {
      squares[index] = "❌"
      counter++
      this.setState({squares: squares, counter: counter})
    }
    }


  render() {
    return (
      <>
        <h1>Tic Tac Toe</h1>
        <div className="gameBoard">
          {this.state.squares.map((value, index) => {
            return <Square
                value={value}
                key={index}
                index={index}
                handleEmoji={this.handleEmoji}
            />;
          })}
        </div>
      </>
    );
  }
}
export default App;
