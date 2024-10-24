import { useState } from 'react'
import './App.css'

function App() {
  let [value, setValue] = useState(0)

 // const value = 0

const increaseValue = ()=>{
  console.log("click", value);
  //value = value + 1
  //setValue(value+1)

  setValue((preValue )=> preValue+1)
  setValue(preValue => preValue+1)
  setValue(preValue => preValue+1)
  setValue(preValue => preValue+1)

}


const decreaseValue = ()=>{
  console.log("click", value);
  //value = value + 1
  setValue(value - 1)

  setValue(preValue => preValue -1)
  setValue(preValue => preValue -1)
  setValue(preValue => preValue -1)
  setValue(preValue => preValue -1)

}


  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value : {value}</h2>
      <button onClick={increaseValue}>Increase value {value}</button>
      <br /><br />
      <button onClick={decreaseValue}>Decrease value {value}</button>
    </>
  )
}

export default App
