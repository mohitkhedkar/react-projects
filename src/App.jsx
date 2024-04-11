import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Projects />
    </>
  );
}

export default App;
