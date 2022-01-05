import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

// map to display all the boxes
// add emojis for player 1 and player 2
// flex the boxes/grid
// create functionality for each boxes (onClick, event handling)
// create functionality to switch between player 1 and player 2 -- incrementing state/variable somehow
// logic of how a player wins
// use array to decide who wins with alert
// game ends after winner is decided or all squares selected
// restart button that clears the gameboard
// notification of player 1 and player 2 who's turn -- onClick displays Player 1 when even and player 2 when odd
// search input field that accepts emoji or create radio button


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  }

      // const { squares }=this.state

  render(){


    return(
      <>
        <h1>Tic Tac Toe</h1>
        {this.state.squares.map(value => {
          return(<Square />)
        }
      }
      </>

    )
  }
}
export default App
