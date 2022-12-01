import gsap from 'gsap';
import React,{useEffect, useRef} from 'react'
import wave from "../assets/wavinghand.png"
function Hello() {
    let hello=useRef(null);
    let wavehand=useRef(null);
    useEffect(()=>{
        gsap.fromTo(hello,1,{opacity:0,y:100},{opacity:1,y:0});
        gsap.fromTo(wavehand,1,{opacity:0,y:100},{opacity:1,y:0});
    },[]);
  return (
    <>
    <h1 ref={ele=>hello=ele} className="text-2xl text-center font-mono font-bold">Hello Stranger! </h1>
    <img src={wave} alt="waving hand" className='h-20 ml-5' ref={ele=>wavehand=ele}/>
    </>
  )
}

export default Hello