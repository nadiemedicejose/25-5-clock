import React from 'react'
import LengthControl from './LengthControl';

export default function LengthControls({
  brkLength,
  setBrkLength,
  seshLength,
  setSeshLength,
  timerState,
  timerType,
  setTimer
}) {
  const updateBrkLength = (e) => {
    let currentLength = brkLength;
    let newTimerType = 'Session';
    let sign = e.currentTarget.dataset.operation;

    if (timerState === 'running') {
      return;
    }
    if (timerType === newTimerType) {
      if (sign === '-' && currentLength !== 1) {
        setBrkLength(currentLength - 1);
      } else if (sign === '+' && currentLength !== 60) {
        setBrkLength(currentLength + 1);
      }
    } else if (sign === '-' && currentLength !== 1) {
      setBrkLength(currentLength - 1);
      setTimer(currentLength * 60 - 60);
    } else if (sign === '+' && currentLength !== 60) {
      setBrkLength(currentLength + 1);
      setTimer(currentLength * 60 + 60);
    }
  }

  const updateSeshLength = (e) => {
    let currLength = seshLength;
    let newTimerType = 'Break';
    let sign = e.currentTarget.dataset.operation;

    if (timerState === 'running') {
      return;
    }
    if (timerType === newTimerType) {
      if (sign === '-' && currLength !== 1) {
        setSeshLength(currLength - 1);
      } else if (sign === '+' && currLength !== 60) {
        setSeshLength(currLength + 1);
      }
    } else if (sign === '-' && currLength !== 1) {
      setSeshLength(currLength - 1);
      setTimer(currLength * 60 - 60);
    } else if (sign === '+' && currLength !== 60) {
      setSeshLength(currLength + 1);
      setTimer(currLength * 60 + 60);
    }
  }

  return (
    <div>
      <LengthControl
        addID = 'session-increment'
        length = {seshLength}
        lengthID = 'session-length'
        minID = 'session-decrement'
        onClick={updateSeshLength}
        title = 'Session Length'
        titleID = 'session-label'
      />
      <LengthControl
        addID = 'break-increment'
        length = {brkLength}
        lengthID = 'break-length'
        minID = 'break-decrement'
        onClick={updateBrkLength}
        title = 'Break Length'
        titleID = 'break-label'
      />
    </div>
  )
}
