import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const increment = <FontAwesomeIcon icon={faChevronUp} />
const decrement = <FontAwesomeIcon icon={faChevronDown} />

export default function LengthControl({
  control,
  title,
  length,
  onClick}) {

  return (
    <div className='length-control'>
      <div id={control + '-label'}>{title}</div>
      <div className='controls-container'>
        <span id={control + '-decrement'} onClick={onClick} data-operation='-'>{decrement}</span>
        <span id={control + '-length'}>{length}</span>
        <span id={control + '-increment'} onClick={onClick} data-operation='+'>{increment}</span>
      </div>
    </div>
  )
}
