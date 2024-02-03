// import logo from './logo.svg';
import './App.css';
import React , {useState,useEffect} from "react"

function App() {
  const [isRunning,setIsRunning]=useState(false)
  const [timeElapsed,setTimeElapsed]=useState(0)

  useEffect(()=>{
    let intervalId;
    if(isRunning){
     intervalId=setInterval(()=>{
        setTimeElapsed((prevVal)=>prevVal+1)
      },1000)
    }else{
      clearInterval(intervalId)
    }
    return ()=>{
      clearInterval(intervalId)
    }
  },[isRunning])

  const defaultFunction=()=>{
    setIsRunning((prevState)=>!prevState)
  }
  const mins=(seconds)=>{
    let min=Math.floor(seconds/60)
    let sec=seconds%60;
    return `${min}:${sec>10?"":"0"}${sec}`
  }
  const reset=()=>{
    setIsRunning(false)
    setTimeElapsed(0)
  }
  return (
   <div>
   <h1>Stopwatch</h1>
   <p>Time: {mins(timeElapsed)}</p>
   <button onClick={defaultFunction}>{isRunning?"Stop":"Start"}</button>
   <button onClick={reset}>Reset</button>
   </div>
  );
}

export default App;
