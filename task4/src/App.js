import Joke from "./Joke";

function App() {
  return (
    <>
      <Joke
        setup={"세상에서 제일 착한 사자는?"}
        punchline={"자원봉사자"}
      ></Joke>
      <Joke setup={"노크한 남자는?"} punchline={"똑똑한 남자"}></Joke>
    </>
  );
}

export default App;
