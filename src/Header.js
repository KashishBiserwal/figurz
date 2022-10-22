import React, {useState} from 'react'

export default function Header() {
  const [show, setShow] = useState(true)
  function handleClick(){
    setShow(prev => !prev)
  }
  return (
      <div className='grid-container'>
      <div className={show ? "grid-item" : "grid-item clicked-div"}>
        <img src='images/cap.png' alt='haha' onClick={handleClick}/>
      </div>
      <div className="grid-item"><img src='images/bp.png' alt='haha'/></div>
      <div className="grid-item"><img src='images/black widow.png' alt='haha'/></div>
      <div className="grid-item"><img src='images/cap-mar.png' alt='haha'/></div>
      <div className="grid-item"><img src='images/wol.png' alt='haha'/></div>
      <div className="grid-item"><img src='images/thor.png' alt='haha'/></div>
      <div className="grid-item"><img src='images/venom.png' alt='haha'/></div>
      <div className="grid-item"><img src='images/ironman.png' alt='haha'/></div>
      <div className="grid-item"><img src='images/batman.png' alt='haha'/></div>
      <div className="grid-item"><img src='images/darth_vader.png' alt='haha'/></div>
      <div className="grid-item"><img src='images/dog.png' alt='haha'/></div>
      <div className="grid-item"><img src='images/flash.png' alt='haha'/></div>
      <div className="grid-item"><img src='images/hulk.png' alt='haha'/></div>
      <div className="grid-item"><img src='images/krrish.png' alt='haha'/></div>
      <div className="grid-item"><img src='images/spiderman.png' alt='haha'/></div>
      <div className="grid-item"><img src='images/sup.png' alt='haha'/></div>
      <div className="grid-item"><img src='images/ww.png' alt='haha'/></div>
      <div className="grid-item"><img src='images/cap.png' alt='haha'/></div>
      <div className="grid-item"><img src='images/thanos.png' alt='haha'/></div>
      <div className="grid-item"><img src='images/black widow.png' alt='haha'/></div>
      <div className="grid-item"><img src='images/cap-mar.png' alt='haha'/></div>
      <div className="grid-item"><img src='images/thanos.png' alt='haha'/></div>
      <div className="grid-item"><img src='images/thor.png' alt='haha'/></div>
      <div className="grid-item"><img src='images/venom.png' alt='haha'/></div>
      <div className="grid-item"><img src='images/ironman.png' alt='haha'/></div>
      <div className="grid-item"><img src='images/batman.png' alt='haha'/></div>
      <div className="grid-item"><img src='images/darth_vader.png' alt='haha'/></div>
      <div className="grid-item"><img src='images/dog.png' alt='haha'/></div>
    </div>
  )
}
