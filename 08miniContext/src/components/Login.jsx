import {React, useState, useContext} from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const {setUser} = useContext(UserContext)
  function handleClick(e) {
    e.preventDefault();
    console.log("Came here");
    setUser({name,password})
  }
  return (
    <>
      <input
        type="text"
        name="Name"
        id="Name"
        placeholder="FirstName"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="Password"
        id="Password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" onClick={handleClick}>Click Me</button>
    </>
  );
}

export default Login;
