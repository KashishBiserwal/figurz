import React from 'react'

export default function Header() {
  const [show, setShow] = React.useState(false)
  function handleClick(){
    setShow(prev => !prev)
  }
  
  return (
    <div className='box' onClick={handleClick}>
      {show && <div className='showing'>
        hahaha
      </div>}
    </div>
  )
}
