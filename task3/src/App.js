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
      <Test name="JunGyoung" hobby="gaming" mbti="isfp"></Test>
    </>
  );
}

export default App;
