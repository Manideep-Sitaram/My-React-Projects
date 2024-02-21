import Card from './components/Card'
import './index.css'

function App() {


  return (
    <>
    <div className="flex flex-col gap-4 items-center">
    <h1 className='bg-green-400 text-black p-4 mb-4 rounded-xl w-1/3 flex justify-center'>Rukhmini is My Girl</h1>
      <Card name = "Rukhmini"/>
      <Card name = "Anu" />
    </div>

    </>
  )
}

export default App
