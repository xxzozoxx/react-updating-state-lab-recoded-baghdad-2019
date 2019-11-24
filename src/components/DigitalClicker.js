// Code DigitalClicker Component Here
import React from 'react'
class DigitalClicker extends React.Component {
  constructor(){
    super()
    this.state = {
      timesClicked:0
    }
  }
  handleClick = (e) =>{
   this.setState()
  }
  render(){
    return (
      <button onClick={this.handleClick}> {label} </button>
      )
  }
}