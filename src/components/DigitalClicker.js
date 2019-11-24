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
   this.setState(prevState => ({
     timesClicked: prevState + 1
   })
  }
  render(){
    return (
      <button onClick={this.handleClick}> {label} </button>
      )
  }
}