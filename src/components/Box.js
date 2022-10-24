import React, {useState}  from 'react'

export default function Box(props) {
    const [show, setShow] = useState(true)
    function handleClick(){
      setShow(prev => !prev)
    }
  return (
    <div className={show ? "grid-item" : "grid-item clicked-div"}>
        <img src={props.img} alt='haha' onClick={handleClick}/>
    </div>
  )
}
