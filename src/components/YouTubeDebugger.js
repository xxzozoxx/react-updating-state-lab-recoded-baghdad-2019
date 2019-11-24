// Code YouTubeDebugger Component Here
import React from 'react'
class YouTubeDebugger extends React.Component{
  constructor(){
    super()
    this.state = {
        errors: [],
        user: null,
        settings: {
        bitrate: 8,
        video: {
      resolution: '1080p'
         }
      }
    }
  }
  handleClick = () =>{
     
  }
  render(){
    return(
      <div>
      <button className='bitrate' onClick={this.handleClick}></button>
      </div>
      )
  }
}