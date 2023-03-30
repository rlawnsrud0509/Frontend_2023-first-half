import Joke from "./Joke";
import Jokes from "./JokesData";

function App() {
  // const foods = ["치킨", "라면", "떡볶이", "참치마요"];
  // let JSXfoods = foods.map((food) => {
  //   return <p>{food}</p>;
  // });

  let Jokess = Jokes.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline}></Joke>;
  });

  return (
    <>
      {/* <Joke punchline={"자원봉사자"}></Joke>
      <Joke setup={"노크한 남자는?"} punchline={"똑똑한 남자"}></Joke>
      <Joke punchline={"엄준식"}></Joke> */}

      {Jokess}
      {/* 
      {JSXfoods} */}
    </>
  );
}

export default App;
