import { useState } from 'react'
import './App.css'
import './index.css'
import InputBox from './components/InputBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="p-8 bg-slate-300 max-w-md mx-auto">
      <InputBox label = "From"/>
      <button className='py-2 text-white bg-blue-500 rounded m-1 px-3'>swap</button>
      <InputBox label = "To"/>
      <button className='w-full bg-blue-600 rounded-xl px-2 py-3 my-4 text-white'>Convert USD to INR</button>
     </div>
    </>
  )
}

export default App
