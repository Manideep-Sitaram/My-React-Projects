import { useState } from "react";
import "./index.css";

function App() {
  const [color, setColor] = useState("black");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 text-white">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
              onClick={() => setColor("red")}
            >
              Red
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
              onClick={() => setColor("blue")}
            >
              Blue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
              onClick={() => setColor("green")}
            >
              Green
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "yellow" }}
              onClick={() => setColor("Yellow")}
            >
              Yellow
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "orange" }}
              onClick={() => setColor("orange")}
            >
              Orange
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "olive" }}
              onClick={() => setColor("olive")}
            >
              Olive
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "deeppink" }}
              onClick={() => setColor("deeppink")}
            >
              Pink
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "brown" }}
              onClick={() => setColor("brown")}
            >
              Brown
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "crimson" }}
              onClick={() => setColor("crimson")}
            >
              Crimson
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blueviolet" }}
              onClick={() => setColor("blueviolet")}
            >
                Blueviolet
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "fuchsia" }}
              onClick={() => setColor("fuchsia")}
            >
              Fuchsia
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "powderblue" }}
              onClick={() => setColor("powderblue")}
            >
              Powderblue
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "burlywood" }}
              onClick={() => setColor("burlywood")}
            >
              Burlywood
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "darkcyan" }}
              onClick={() => setColor("darkcyan")}
            >
              Cyan
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "indigo" }}
              onClick={() => setColor("indigo")}
            >
              Indigo
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
