import React from 'react'

export default function Timer({state}) {
  const clockify = (timer) => {
    let minutes = Math.floor(timer / 60);
    let seconds = timer - minutes * 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return minutes + ':' + seconds;
  }

  return (
    <div className='timer' style={state.alarmColor}>
      <div className='timer-wrapper'>
        <div id='timer-label'>{state.timerType}</div>
        <div id='time-left'>{clockify(state.timer)}</div>
      </div>
    </div>
  )
}
