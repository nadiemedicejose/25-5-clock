import React from 'react'

export default function Timer(props) {
  return (
    <div className='timer'>
      <div className='timer-wrapper'>
        <div id='timer-label'>{props.timerType}</div>
        <div id='time-left'>{props.clockify}</div>
      </div>
    </div>
  )
}
