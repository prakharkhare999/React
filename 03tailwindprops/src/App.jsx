import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  // let myobj={
  //   username:"hitesh",
  //   age:21
  // }
  // let newarr=[2,4,6]
  //in tags
  //pass the obj and arr
  //<card someobj={myobj} somearr={myarr}></card>

  return (
    <>

    <h1  className='bg-green-500 text-center rounded-md'   >tailwind test</h1>
    <Card username='prkahr' btntext="click me"/>
    <Card username="priya" />

        </>
  )
}

export default App
