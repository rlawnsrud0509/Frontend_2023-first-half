import "./style.css";
import TrollFace from "../images/TrollFace.png";

export default function Header() {
  return (
    <div className="Header">
      <img src={TrollFace} style={{ width: "31px", height: "26px" }}></img>
      <h1>Meme Generator</h1>
      <h2>React Course - Project 3</h2>
    </div>
  );
}
