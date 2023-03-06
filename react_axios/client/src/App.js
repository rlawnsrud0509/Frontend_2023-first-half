import "./App.css";
import { useRef } from "react";

function App() {
  const animal = useRef();
  const animalText = useRef();

  const getSound = (e) => {
    axios(`http://localhost:3000/sound/${animal.current.value}`)
      .then((response) => response.json())
      .then((data) => {
        animalText.current.innerHTML = `동물 울음소리는????? := ${data.sound}`;
      });
  };

  return (
    <>
      <div>
        <h1>동물 울음소리 알아보아요 ^^</h1>
        <input ref={animal}></input>
        <button onClick={getSound}>알아보아요~</button>
        <h1 ref={animalText}>동물 울음소리는????? :=</h1>
      </div>
    </>
  );
}

export default App;
