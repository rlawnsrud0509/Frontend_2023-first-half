import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState({});
  const [count, setCount] = useState(1);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setData(data), console.log(data));
  }, [count]);

  return (
    <div className="App">
      <h2>the count is {count}</h2>
      <button
        onClick={() => {
          setCount((prev) => (prev % 83) + 1);
        }}
      >
        +
      </button>
      <h2>
        {data.name}
        <br />
        {data.birth_year}
      </h2>
    </div>
  );
}

export default App;
