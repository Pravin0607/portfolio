import { useEffect, useState } from "react";
import Hello from "./components/Hello";
import Loading from "./components/Loading";
function App() {
  const [state,setState]=useState(true);
  
  useEffect(()=>{
    setTimeout(
      ()=>{
        setState(false);
      },3000
    )
  },[]);

  return (
    <div className="h-screen w-full bg-emerald-200 flex justify-center items-center">
{state ?
      <Loading/>
      :
      <Hello/>
}
    </div>
  );
}

export default App;