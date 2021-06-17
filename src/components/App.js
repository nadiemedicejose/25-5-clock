import React, { Component } from 'react'
import LengthControl from './LengthControl';
import Timer from './Timer';
import TimerControl from './TimerControl';
import Footer from './Footer';
import '../styles/App.scss';
import { accurateInterval } from '../libraries/accurateInterval';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brkLength: 5,
      seshLength: 25,
      timerState: 'stopped',
      timerType: 'Session',
      timer: 1500,
      intervalID: '',
      alarmColor: { color: 'white' }
    };

    this.setBrkLength = this.setBrkLength.bind(this);
    this.setSeshLength = this.setSeshLength.bind(this);
    this.lengthControl = this.lengthControl.bind(this);
    this.timerControl = this.timerControl.bind(this);
    this.beginCountDown = this.beginCountDown.bind(this);
    this.decrementTimer = this.decrementTimer.bind(this);
    this.phaseControl = this.phaseControl.bind(this);
    this.warning = this.warning.bind(this);
    this.buzzer = this.buzzer.bind(this);
    this.switchTimer = this.switchTimer.bind(this);
    this.reset = this.reset.bind(this);
  }

  setBrkLength(e) {
    this.lengthControl(
      'brkLength',
      e.currentTarget.dataset.operation,
      this.state.brkLength,
      'Session'
    );
  }

  setSeshLength(e) {
    this.lengthControl(
      'seshLength',
      e.currentTarget.dataset.operation,
      this.state.seshLength,
      'Break'
    );
  }

  lengthControl(stateToChange, sign, currentLength, timerType) {
    if (this.state.timerState === 'running') {
      return;
    }
    if (this.state.timerType === timerType) {
      if (sign === '-' && currentLength !== 1) {
        this.setState({ [stateToChange]: currentLength - 1 });
      } else if (sign === '+' && currentLength !== 60) {
        this.setState({ [stateToChange]: currentLength + 1 });
      }
    } else if (sign === '-' && currentLength !== 1) {
      this.setState({
        [stateToChange]: currentLength - 1,
        timer: currentLength * 60 - 60
      });
    } else if (sign === '+' && currentLength !== 60) {
      this.setState({
        [stateToChange]: currentLength + 1,
        timer: currentLength * 60 + 60
      });
    }
  }

  timerControl() {
    if (this.state.timerState === 'stopped') {
      this.beginCountDown();
      this.setState({ timerState: 'running' });
    } else {
      this.setState({ timerState: 'stopped' });
      if (this.state.intervalID) {
        this.state.intervalID.cancel();
      }
    }
  }

  beginCountDown() {
    this.setState({
      intervalID: accurateInterval(() => {
        this.decrementTimer();
        this.phaseControl();
      }, 1000)
    });
  }

  decrementTimer() {
    this.setState({ timer: this.state.timer - 1 });
  }

  phaseControl() {
    let timer = this.state.timer;
    this.warning(timer);
    this.buzzer(timer);
    if (timer < 0) {
      if (this.state.intervalID) {
        this.state.intervalID.cancel();
      }
      if (this.state.timerType === 'Session') {
        this.beginCountDown();
        this.switchTimer(this.state.brkLength * 60, 'Break');
      } else {
        this.beginCountDown();
        this.switchTimer(this.state.seshLength * 60, 'Session');
      }
    }
  }

  warning(_timer) {
    if (_timer < 61) {
      this.setState({ alarmColor: { color: '#a50d0d' } });
    } else {
      this.setState({ alarmColor: { color: 'white' } });
    }
  }

  buzzer(_timer) {
    if (_timer === 0) {
      this.audioBeep.play();
    }
  }

  switchTimer(num, str) {
    this.setState({
      timer: num,
      timerType: str,
      alarmColor: { color: 'white' }
    });
  }

  reset() {
    this.setState({
      brkLength: 5,
      seshLength: 25,
      timerState: 'stopped',
      timerType: 'Session',
      timer: 1500,
      intervalID: '',
      alarmColor: { color: 'white' }
    });
    if (this.state.intervalID) {
      this.state.intervalID.cancel();
    }
    this.audioBeep.pause();
    this.audioBeep.currentTime = 0;
  }

  render() {
    return (
      <div className="App">
        <h1>25 + 5 Clock</h1>
        <LengthControl
          addID = 'session-increment'
          length = {this.state.seshLength}
          lengthID = 'session-length'
          minID = 'session-decrement'
          onClick={this.setSeshLength}
          title = 'Session Length'
          titleID = 'session-label'
        />
        <LengthControl
          addID = 'break-increment'
          length = {this.state.brkLength}
          lengthID = 'break-length'
          minID = 'break-decrement'
          onClick={this.setBrkLength}
          title = 'Break Length'
          titleID = 'break-label'
        />
        <Timer
          style = {this.state.alarmColor}
          timerType = {this.state.timerType}
          timer = {this.state.timer}
        />
        <TimerControl
          timerControl = {this.timerControl}
          reset = {this.reset}
        />
        <Footer />

        <audio
          id = 'beep'
          preload = 'auto'
          ref = {(audio) => {
            this.audioBeep = audio;
          }}
          src = 'https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'
        />
      </div>
    )
  }
}
