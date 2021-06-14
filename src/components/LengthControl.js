import React, { useState } from 'react'

export default function LengthControl(props) {
  const [value, setValue] = useState(props.value);

  return (
    <div className='length-control'>
      <div id={props.name + '-label'}>{props.name + ' length'}</div>
      <div id={props.name + '-decrement'} onClick={() => setValue(value - 1)}>Decrement</div>
      <div id={props.name + '-increment'} onClick={() => setValue(value + 1)}>Increment</div>
      <div id={props.name + '-length'}>{value}</div>
    </div>
  )
}
