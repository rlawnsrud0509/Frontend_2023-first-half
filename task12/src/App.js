import WindowTracker from "./WindowTracker";
import { useState } from "react";
import "./App.css";

function App() {
  const [show, setShow] = useState(true);
  function toggle() {
    setShow((prev) => !prev);
  }
  return (
    <div className="App">
      <WindowTracker></WindowTracker>
    </div>
  );
}

export default App;
