import React, { Component } from 'react'

class Square extends Component{

handleTurn = () => {
  this.props.handleEmoji(this.props.index)
}

handlesEmoji = () => {
  this.props.testMethod()
}
  render(){
    return(
      <>
        <div
        onClick={() => {this.handlesEmoji()}}
        className="square"
        >
        {this.props.value}
        </div>
      </>
    )
  }
}
export default Square
