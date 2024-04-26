import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoContextProvider } from '../context'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  
  const [todos, setTodos] = useState([]);

  function addTodo(todo){
    setTodos([...todos, {id : Date.now(), todo, completed : false}])
  }

  function editTodo(id, todo){

  }

  function deleteTodo(id){

  }

  function toggleTodo(id){

  }

  return (
    <>
      <TodoContextProvider value={{todos,addTodo,editTodo,deleteTodo,toggleTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                       <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo) => (
                          <TodoItem todo={todo} />
                        ))}
                    </div>
                    {console.log(todos.length)}
                </div>
            </div>
      </TodoContextProvider>
    </>
  )
}

export default App
