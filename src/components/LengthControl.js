import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const increment = <FontAwesomeIcon icon={faChevronUp} />
const decrement = <FontAwesomeIcon icon={faChevronDown} />

export default function LengthControl(props) {
  return (
    <div className='length-control'>
      <div id={props.titleID}>{props.title}</div>
      <div className='controls-container'>
        <span id={props.minID} onClick={props.onClick} data-operation='-'>{decrement}</span>
        <span id={props.lengthID}>{props.length}</span>
        <span id={props.addID} onClick={props.onClick} data-operation='+'>{increment}</span>
      </div>
    </div>
  )
}

