import React, { useState } from 'react'

export default function ToggleFilter(props) {
    const [show, setShow] = useState(true)
    function handleClick(){
        setShow(prev => !prev)
    }
  return (
    <div className='toggle-btn'>
        <button className='toggle' onClick={handleClick}>{show ? 'Show' : 'Hide'} Filters</button>
    </div>
  )
}
