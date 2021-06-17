import React from 'react'
import LengthControl from './LengthControl';

export default function LengthControls(props) {
  const updateBrkLength = (e) => {
    let currentLength = props.brkLength;
    let newTimerType = 'Session';
    let sign = e.currentTarget.dataset.operation;

    if (props.timerState === 'running') {
      return;
    }
    if (props.timerType === newTimerType) {
      if (sign === '-' && currentLength !== 1) {
        props.setBrkLength(currentLength - 1);
      } else if (sign === '+' && currentLength !== 60) {
        props.setBrkLength(currentLength + 1);
      }
    } else if (sign === '-' && currentLength !== 1) {
      props.setBrkLength(currentLength - 1);
      props.setTimer(currentLength * 60 - 60);
    } else if (sign === '+' && currentLength !== 60) {
      props.setBrkLength(currentLength + 1);
      props.setTimer(currentLength * 60 + 60);
    }
  }

  const updateSeshLength = (e) => {
    let currentLength = props.seshLength;
    let newTimerType = 'Break';
    let sign = e.currentTarget.dataset.operation;

    if (props.timerState === 'running') {
      return;
    }
    if (props.timerType === newTimerType) {
      if (sign === '-' && currentLength !== 1) {
        props.setSeshLength(currentLength - 1);
      } else if (sign === '+' && currentLength !== 60) {
        props.setSeshLength(currentLength + 1);
      }
    } else if (sign === '-' && currentLength !== 1) {
      props.setSeshLength(currentLength - 1);
      props.setTimer(currentLength * 60 - 60);
    } else if (sign === '+' && currentLength !== 60) {
      props.setSeshLength(currentLength + 1);
      props.setTimer(currentLength * 60 + 60);
    }
  }

  return (
    <div>
      <LengthControl
        addID = 'session-increment'
        length = {props.seshLength}
        lengthID = 'session-length'
        minID = 'session-decrement'
        onClick={updateSeshLength}
        title = 'Session Length'
        titleID = 'session-label'
      />
      <LengthControl
        addID = 'break-increment'
        length = {props.brkLength}
        lengthID = 'break-length'
        minID = 'break-decrement'
        onClick={updateBrkLength}
        title = 'Break Length'
        titleID = 'break-label'
      />
    </div>
  )
}
