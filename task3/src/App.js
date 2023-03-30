import "./App.css";
import Test from "./Test";

function App() {
  //jsx에서 변수선언
  // const FirstName = "Kim"
  // const LastName = "JunGyoung";

  // return (
  //   <h1>Hello {FirstName} {LastName}</h1>
  // );

  //12시 이전에는 Good Morning
  //17시 이후에는 Good Evening
  //그 외에는 Good Afternoon

  let date = new Date();

  let text = "Good Afternoon";

  if (date.getHours() >= 17) {
    text = "Good Evening";
  }
  if (date.getHours() <= 12) {
    text = "Good Evening";
  }

  return (
    <>
      <h1>{text}</h1>
      <Test name="JunGyoung" hobby="gaming" mbti="isfp" 군대={false}></Test>
      <Test name="heesung" hobby="ddal" mbti="none" 군대={false}></Test>
      <Test name="seojin" hobby="fifaOnline" mbti="none" 군대={false}></Test>
      <Test name="jinam" hobby="eating" mbti="none" 군대={true}></Test>
      <Test name="hyeonu" hobby="lol" mbti="none" 군대={false}></Test>
      <Test name="명재" hobby="genshin impact" mbti="none" 군대={true}></Test>
      {
        //조건부 렌더링
      }
    </>
  );
}

export default App;
