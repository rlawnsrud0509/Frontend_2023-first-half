import { useState } from "react";
import Data from "./memesData";

export default function Body() {
  let [textBox1, setTextBox1] = useState("");
  let [textBox2, setTextBox2] = useState("");
  let [img, setImg] = useState(0);

  const getRandomUrl = () => {
    setImg((img = Math.floor(Math.random() * Data.data.memes.length)));
  };

  const changeText1 = (e) => {
    setTextBox1(e.target.value);
  };

  const changeText2 = (e) => {
    setTextBox2(e.target.value);
  };

  return (
    <>
      <input type="text" className="Input" onChange={changeText1}></input>
      <input type="text" className="Input" onChange={changeText2}></input>
      <button className="submitBtn" onClick={getRandomUrl}>
        Get a new meme image
      </button>
      <div
        className="img111"
        style={{ background: `url(${Data.data.memes[img].url})` }}
      >
        <h1 className="imageText">{textBox1.toUpperCase()}</h1>
        <h1 className="imageText">{textBox2.toUpperCase()}</h1>
      </div>
    </>
  );
}
