import React, { Component } from 'react'

class Restart extends Component{

handleRestart = () => {
  this.props.restartButton()
}

  render(){
    return(
      <>
        <button
        onClick={() => {this.handleRestart()}}
        >Restart Button
        </button>
      </>
    )
  }
}
export default Restart
