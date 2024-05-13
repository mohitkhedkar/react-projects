import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  // let counter = 0;

  const addValue = () => {
    setCounter(counter + 1);
  };
  const delValue = () => {
    setCounter(counter - 1);
  };
  const resetValue = () => {
    setCounter(counter * 0);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>ADD to Count</button>
      <button onClick={delValue}>DELETE from Count</button>
      <button onClick={resetValue}>RESET</button>
    </>
  );
}

export default App;
