import { useCallback, useEffect, useState } from "react";
import "./index.css";

function App() {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charsAllowed, setCharsAllowed] = useState(false);
  const [password, setPassword] = useState(null);

  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pass = "";
    if (numbersAllowed) {
      console.log("Came here")
      str += "0123456789";
    }
    if (charsAllowed) str += "!@#$%^&*-_+=[]{}~";
    for (let i = 0; i < length; i++) {
      let index = Math.floor(Math.random() * str.length);
      pass += str.charAt(index);
    }
    setPassword(pass);
  }, [length, numbersAllowed, charsAllowed]);

  useEffect(passwordGenerator, [length, charsAllowed, numbersAllowed]);

  return (
    <>
      <h1 className="w-full text-white text-center my-14 text-3xl">
        Password Generator
      </h1>
      <div className="w-full mx-auto max-w-md  px-4 py-4 my-8 bg-gray-800 text-orange-500">
        <div className="flex justify-center rounded-lg mb-4">
          <input
            className="outline-none py-2 px-3 "
            type="text"
            value={password}
          />
          <button className="outline-none bg-blue-600 text-white px-3 py-2 ">
            copy
          </button>
        </div>
        <div className="flex items-center gap-x-2">
          <input
            className="cursor-pointer"
            type="range"
            onChange={(e) => setLength(e.target.value)}
            value={length}
          />
          <label>Length ({length})</label>
          <input
            type="checkbox"
            onChange={() => setNumbersAllowed((prev) => !prev)}
            defaultChecked={numbersAllowed}
          />
          <label>Number</label>
          <input
            type="checkbox"
            onChange={() => setCharsAllowed((prev) => !prev)}
            defaultChecked={charsAllowed}
          />
          <label>Character</label>
        </div>
      </div>
    </>
  );
}

export default App;
