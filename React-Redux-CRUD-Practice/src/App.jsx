import { useState } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { addUser } from './features/Users'

function App() {

  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value)

  const [name, setName] = useState("");
  const [username, setUserName] = useState("")
  return (
   <div className="App">
    <div className="addUser">
      <input type="text" placeholder='Name...' onChange={(event)=> {setName(event.target.value)}}/>
      <input type="text" placeholder='Username...' onChange={(event)=> {setUserName(event.target.value)}}/>
      <button onClick={() => {dispatch(addUser({id: 0 ,name,username}))}}>Add User</button>
    </div>
    <div className="displayUsers">
      {userList.map((user) =>
        <div>
            <h1>{user.name}</h1>
            <h1>{user.username}</h1>
        </div>

      )}
    </div>
   </div>
  )
}

export default App
