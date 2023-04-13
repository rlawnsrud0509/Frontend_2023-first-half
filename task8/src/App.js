import "./style.css";
import { useState } from "react";
import boxes from "./boxes";
import Box from "./Box";

export default function App() {
  const [squares, setSquares] = useState(boxes);

  function toggle(id) {
    setSquares((prev) => {
      return prev.map((squares) => {
        return squares.id === id ?
        {... squares, on: !squares.on} : squares;
      })
    })
  }

  const squaresElements = squares.map((square) => (
    <Box on={square.on} key={square.id} id={square.id} toggle={toggle} />
  ));

  return <main>{squaresElements}</main>;
}
