import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setCounter]=useState(15)

  //let counter=5

const addremove=()=>{
  if(counter!=0){
    setCounter(counter-1)
  }
  


}


  const addvalue = ()=>{
   
    if(counter<20){
      counter=counter+1
      setCounter(counter)
    }
   
    console.log("counter",counter)

   
  }
  return (
    <>
    <h1>chai aur react</h1>
    <h1>counter value:{counter}</h1>
    <button onClick={addvalue}>Add value {counter}</button>
    <br></br>
    <button onClick={addremove}>remove value{counter}</button>
    </>
  )
}

export default App
