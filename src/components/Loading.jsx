import {useEffect, useRef} from "react"
import gsap from "gsap";
function Loading() {
  let c1=useRef(null);
  let c2=useRef(null);
  let c3=useRef(null);
  let c4=useRef(null);
  useEffect(()=>{    
    gsap.fromTo([c1,c3],.3,{y:10},{y:-30,yoyo:true,repeat:-1,ease:"inout"});
    gsap.fromTo([c2,c4],.3,{y:-30},{y:10,yoyo:true,repeat:-1,ease:"inout"})
  },[]);
  return (
    <div className='flex justify-center items-center space-x-16'>
        <div className="h-10 w-10 rounded-full  bg-blue-500" ref={ele=>c1=ele}></div>
        <div className="h-10 w-10 rounded-full  bg-red-500" ref={ele=>c2=ele}></div>
        <div className="h-10 w-10 rounded-full  bg-yellow-500" ref={ele=>c3=ele}></div>
        <div className="h-10 w-10 rounded-full  bg-green-500" ref={ele=>c4=ele}></div>
    </div>
  )
}

export default Loading