import React, {useState} from 'react'

export default function Header() {
  const [show, setShow] = useState(true)
  function handleClick(){
    setShow(prev => !prev)

  }
  
  return (
      <div className='grid-container'>
      <div className={show ? "grid-item" : "grid-item clicked-div"}>
        <img src='images/cap.png' onClick={handleClick}/>
      </div>
      <div className="grid-item"><img src='images/bp.png'/></div>
      <div className="grid-item"><img src='images/black widow.png'/></div>
      <div className="grid-item"><img src='images/cap-mar.png'/></div>
      <div className="grid-item"><img src='images/wol.png'/></div>
      <div className="grid-item"><img src='images/thor.png'/></div>
      <div className="grid-item"><img src='images/venom.png'/></div>
      <div className="grid-item"><img src='images/ironman.png'/></div>
      <div className="grid-item"><img src='images/batman.png'/></div>
      <div className="grid-item"><img src='images/darth_vader.png'/></div>
      <div className="grid-item"><img src='images/dog.png'/></div>
      <div className="grid-item"><img src='images/flash.png'/></div>
      <div className="grid-item"><img src='images/hulk.png'/></div>
      <div className="grid-item"><img src='images/krrish.png'/></div>
      <div className="grid-item"><img src='images/spiderman.png'/></div>
      <div className="grid-item"><img src='images/sup.png'/></div>
      <div className="grid-item"><img src='images/ww.png'/></div>
      <div className="grid-item"><img src='images/cap.png'/></div>
      <div className="grid-item"><img src='images/thanos.png'/></div>
      <div className="grid-item"><img src='images/black widow.png'/></div>
      <div className="grid-item"><img src='images/cap-mar.png'/></div>
      <div className="grid-item"><img src='images/thanos.png'/></div>
      <div className="grid-item"><img src='images/thor.png'/></div>
      <div className="grid-item"><img src='images/venom.png'/></div>
      <div className="grid-item"><img src='images/ironman.png'/></div>
      <div className="grid-item"><img src='images/batman.png'/></div>
      <div className="grid-item"><img src='images/darth_vader.png'/></div>
      <div className="grid-item"><img src='images/dog.png'/></div>
    </div>

    
  )
}
