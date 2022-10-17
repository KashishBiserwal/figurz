import React, {useState, useEffect} from 'react'

export default function Content() {
    const [scroll, setScroll] = useState(false);
 useEffect(() => {
   window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 300);
   });
 }, []);
  return (
    <div id='content' className={scroll ? 'scrolled': 'not-scrolled'}>
        <img src='images/big-spidey.png'/>
    </div>
  )
}
