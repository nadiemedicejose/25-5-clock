import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPause, faSyncAlt } from '@fortawesome/free-solid-svg-icons'

const start = <FontAwesomeIcon icon={faPlay} />
const pause = <FontAwesomeIcon icon={faPause} />
const reset = <FontAwesomeIcon icon={faSyncAlt} />

export default function TimerControl() {
  return (
    <div className='timer-control'>
      <span id='start_stop'>{start}{pause}</span>
      <span id='reset'>{reset}</span>
    </div>
  )
}
