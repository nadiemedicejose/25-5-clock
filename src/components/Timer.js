import React from 'react'

export default function Timer(props) {
  const clockify = (timer) => {
    let minutes = Math.floor(timer / 60);
    let seconds = timer - minutes * 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return minutes + ':' + seconds;
  }

  return (
    <div className='timer'>
      <div className='timer-wrapper'>
        <div id='timer-label'>{props.timerType}</div>
        <div id='time-left'>{clockify(props.timer)}</div>
      </div>
    </div>
  )
}
