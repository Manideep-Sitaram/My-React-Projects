import { useState } from "react";
import Button from "./Button";

function App() {
  const [id, setId] = useState(0);

  function addOneToId() {
    setId(id + 1)
  }

  return (
    <>
      <div>Hello World {id}</div>
      <Button addOneToId = {addOneToId}/>
    </>
  );
}

export default App;
