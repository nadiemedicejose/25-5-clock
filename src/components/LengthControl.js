import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const increment = <FontAwesomeIcon icon={faChevronUp} />
const decrement = <FontAwesomeIcon icon={faChevronDown} />

export default function LengthControl(props) {
  const [value, setValue] = useState(props.value);

  return (
    <div className='length-control'>
      <div id={props.name + '-label'}>{props.name + ' length'}</div>
      <div className='controls-container'>
        <span id={props.name + '-decrement'} onClick={() => setValue(value - 1)}>{decrement}</span>
        <span id={props.name + '-length'}>{value}</span>
        <span id={props.name + '-increment'} onClick={() => setValue(value + 1)}>{increment}</span>
      </div>
    </div>
  )
}
