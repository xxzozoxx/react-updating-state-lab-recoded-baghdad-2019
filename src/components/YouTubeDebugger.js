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
  handleBitrateClick = () =>{
    this.setState({settings:{
      ...this.state.settings,
      bitrate:12
    }})
  }
  handleResolution = ()=>{
    this.setState({
      settings:{
        ...this.state.settings,
        video:{
        ...this.state.settings.video,
          resolution:'720p'
        }
      }
    })
  }
  render(){
    return(
      <div>
      <button className='bitrate' onClick={this.handleBitrateClick}></button>
     <button className='resolution' onClick={this.handleResolution}></button>
      </div>
      )
  }
}
export default YouTubeDebugger;