// Code DigitalClicker Component Here
import React from 'react'
class DigitalClicker extends React.Component {
  constructor(){
    super()
    this.state = {
      timesClicked:0
    }
  }
  render(){
    return (
      <button label={this.state.timesClicked}>{label} </button>
      )
  }
}