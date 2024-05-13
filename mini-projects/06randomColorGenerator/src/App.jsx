import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#156482");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }
  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
    console.log(setColor);
  }
  useEffect(() => {
    if (colorType === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [colorType]);

  return (
    <>
      <h1>Random Color Generator</h1>
      <div className="card" style={{ background: color }}>
        <button onClick={() => setColorType("hex")}>Generate Hex Color </button>
        <button onClick={() => setColorType("rgb")}>Generate RGB Color </button>
        <button
          onClick={
            colorType === "hex"
              ? handleCreateRandomHexColor
              : handleCreateRandomRgbColor
          }
        >
          Generate Random Color
        </button>
        <div>
          <h3>Color Type :{colorType}</h3>
          <h1>{color}</h1>
        </div>
      </div>
      <div>
        <a href="https://github.com/mohitkhedkar/react-mini-projects/tree/master/projects/06randomColorGenerator/">
          View Source Code
        </a>
      </div>
    </>
  );
}

export default App;
