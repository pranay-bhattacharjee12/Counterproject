import { useState } from 'react'
import './App.css'

function App() {
  const [cnt, setcnt] = useState(0);

  function increase(){
    if(cnt<20){
      setcnt(cnt+1);
    }else{
      alert("you are not allowed to going above 20")
    }
  }
  function decrease(){
    if(cnt>0){
      setcnt(cnt-1);
    }else{
      alert("you are not allowed to going negative")
    }
  }

  return (
    <>
    <h1>counter value is :{cnt} </h1>

    <button onClick={increase}>increase +</button>
    <br/>
    <button onClick={decrease}>decrease -</button>


    </>
  )
}

export default App
