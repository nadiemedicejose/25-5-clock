import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faSyncAlt } from '@fortawesome/free-solid-svg-icons'

const start = <FontAwesomeIcon icon={faPlay} />
const pause = <FontAwesomeIcon icon={faPause} />
const reset = <FontAwesomeIcon icon={faSyncAlt} />

export default function TimerControl(props) {
  return (
    <div className='timer-control'>
      <span id='start_stop' onClick={props.timerControl}>{start}{pause}</span>
      <span id='reset' onClick={props.reset}>{reset}</span>
    </div>
  )
}
