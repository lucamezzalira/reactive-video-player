import React from 'react';

class Playback extends React.Component {

  constructor(props){
     super(props);
     this._timer = null;
  }

  componentDidMount(){
    this._video = this.refs.videoplayback.getDOMNode();
    this._video.addEventListener("timeupdate", this.setVideoplaybackData.bind(this));
    this._video.addEventListener("loadedmetadata", this.setVideoplaybackData.bind(this));
    this._video.addEventListener("seeking", this.setVideoplaybackData.bind(this));
  }



  setVideoplaybackData(){
  /*  this.setState({
      isPlayDisabled: true,
      maxBarValue: this._video.duration,
      barPosition: this._video.currentTime,
      totalDuration: this.formatTime(this._video.duration),
      currentPosition: this.formatTime(this._video.currentTime)
    });*/
  }

  onFullScreen(){
    if (this._video.requestFullscreen) {
      this._video.requestFullscreen();
    } else if (this._video.msRequestFullscreen) {
      this._video.msRequestFullscreen();
    } else if (this._video.mozRequestFullScreen) {
      this._video.mozRequestFullScreen();
    } else if (this._video.webkitRequestFullscreen) {
      this._video.webkitRequestFullscreen();
    }
  }
  
  render() {
    return (
      <video ref="videoplayback" width="800" height="600" autoPlay={true}></video>
    );
  }
}

export default Playback;
