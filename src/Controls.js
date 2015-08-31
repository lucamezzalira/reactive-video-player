import React from 'react';

import { Button } from 'react-bootstrap';
import { Input } from 'react-bootstrap';
import { Label } from 'react-bootstrap';
import { ProgressBar } from 'react-bootstrap';
import { ButtonToolbar } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';

class Controls extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      isPlayDisabled: false,
      isPauseDisabled: false,
      totalDuration: 0,
      currentPosition: 0,
      barPosition: 0,
      maxBarValue: 0,
      options: ""
    }

  }

  changePosition(value){
    this._video.currentTime = this._video.currentTime + value;
  }

  onFastForward(){
    this._timer = setInterval(this.changePosition.bind(this), 300, 10);
  }

  onRewind(){
    this._timer = setInterval(this.changePosition.bind(this), 300, -10);
  }

  onResume(){
    clearInterval(this._timer);
  }

  onPlay(event){
    //this._video.play();

    this.setState({
      isPlayDisabled: true,
      isPauseDisabled: false,
    });
  }

  onPause(){
    //this._video.pause();

    this.setState({
      isPlayDisabled: false,
      isPauseDisabled: true,
    });
  }

  onVideoChange(event){
    this.setState({
      isPlayDisabled: true,
      isPauseDisabled: false
    });

    //this._video.src = event.target.value;
    //this._video.currentTime = this.state.barPosition;
  }

  onFullScreen(){

  }

  render(){
    return (
      <div>
        <div id="actionsContainer">
          <ButtonToolbar>
            <ButtonGroup>
              <Button onClick={this.onPlay.bind(this)} disabled={this.state.isPlayDisabled}>Play</Button>
              <Button onClick={this.onPause.bind(this)} disabled={this.state.isPauseDisabled}>Pause</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button onMouseDown={this.onRewind.bind(this)} onMouseUp={this.onResume.bind(this)}>RW</Button>
              <Button onMouseDown={this.onFastForward.bind(this)} onMouseUp={this.onResume.bind(this)}>FF</Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button onClick={this.onFullScreen.bind(this)}>Fullscreen</Button>
            </ButtonGroup>
          </ButtonToolbar>
          <Input type='select' placeholder='select' onChange={this.onVideoChange.bind(this)}>
            {this.state.options}
          </Input>
          <h3><Label>{this.state.currentPosition + " - " + this.state.totalDuration}</Label></h3>
        </div>
        <ProgressBar striped bsStyle='info' min={0} max={this.state.maxBarValue} now={this.state.barPosition} active={true}/>
      </div>
    );
  }
}

export default Controls;
