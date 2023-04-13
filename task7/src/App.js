import Header from "./components/header";
import "./App.css";
import Data from "./data.js";
import Body from "./components/body";
import { useState, useEffect } from "react";

function App() {
  let [htmlArr, setHtmlArr] = useState([]);
  useEffect(() => {
    for (let i = 0; i < Data.data.travel.length; i++) {
      setHtmlArr(
        (htmlArr = htmlArr.concat(
          <Body
            img={Data.data.travel[i].url}
            cardName={Data.data.travel[i].name}
            country={Data.data.travel[i].location}
            date={Data.data.travel[i].date}
            desc={Data.data.travel[i].description}
          ></Body>
        ))
      );
      console.log(i);
    }
  }, []);

  return (
    <div className="container">
      <Header></Header>
      {htmlArr}
    </div>
  );
}

export default App;
