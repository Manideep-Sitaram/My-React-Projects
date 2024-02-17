import { useState } from 'react'
import './App.css'

function App() {
 let [counter, setCounter] = useState(15)

 function addValue(){
  // counter = counter+1
  setCounter(counter == 20 ? counter : counter + 1)
 }

 function removeValue(){
  // counter = counter-1
  setCounter(counter == 0 ? counter : counter - 1)
 }

  return (
    <>
    <h1>Counter</h1>
    <p>The count is {counter}</p>
    <button onClick={addValue}>Add value to {counter}</button>
    <button onClick={removeValue}>Remove value to {counter}</button>
    <div>Footer: {counter}</div>
    </>
  )
}

export default App
