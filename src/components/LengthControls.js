import React from 'react'
import LengthControl from './LengthControl';

export default function LengthControls({
  state,
  setBrkLength,
  setSeshLength,
  setTimer }) {

  const updateBrkLength = (e) => {
    let currLength = state.brkLength;
    let newTimerType = 'Session';
    let sign = e.currentTarget.dataset.operation;

    if (state.timerState === 'running') {
      return;
    }
    if (state.timerType === newTimerType) {
      if (sign === '-' && currLength !== 1) {
        setBrkLength(currLength - 1);
      } else if (sign === '+' && currLength !== 60) {
        setBrkLength(currLength + 1);
      }
    } else if (sign === '-' && currLength !== 1) {
      setBrkLength(currLength - 1);
      setTimer(currLength * 60 - 60);
    } else if (sign === '+' && currLength !== 60) {
      setBrkLength(currLength + 1);
      setTimer(currLength * 60 + 60);
    }
  }

  const updateSeshLength = (e) => {
    let currLength = state.seshLength;
    let newTimerType = 'Break';
    let sign = e.currentTarget.dataset.operation;

    if (state.timerState === 'running') {
      return;
    }
    if (state.timerType === newTimerType) {
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
    <div id='length-controls'>
      <LengthControl
        control = {'session'}
        title = {'Session Length'}
        length = {state.seshLength}
        onClick = {updateSeshLength}
      />
      <LengthControl
        control = {'break'}
        title = {'Break Length'}
        length = {state.brkLength}
        onClick={updateBrkLength}
      />
    </div>
  )
}
