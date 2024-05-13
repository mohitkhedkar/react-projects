import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-3xl bg-sky-900 text-white p-5 flex flex-wrap justify-center ">
        Background Changer
      </h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center  gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-white"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full  shadow-lg text-black"
            style={{ backgroundColor: "yellow" }}
          >
            yellow
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
