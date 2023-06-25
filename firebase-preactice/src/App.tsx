import "./App.css";
import { useState } from "react";
import { doc, setDoc } from "firebase/firestore";

await setDoc(doc(database, "user/" + user.userId), {});

function App() {
  interface UserPropTypes {
    userId: number;
    userName: string;
    userFootSize: number;
  }

  const [userId, setUserId] = useState(0);
  const [userName, setUserName] = useState("");
  const [userFootSize, setUserFootSize] = useState(0);

  return (
    <>
      <input
        onChange={(e) => {
          setUserId(+e.target.value);
        }}
      />
      <input
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <input
        onChange={(e) => {
          setUserFootSize(+e.target.value);
        }}
      />
      <button
        onClick={() => {
          setUserData({
            userId,
            userName,
            userFootSize,
          });
        }}
      >
        (값)넣어줘
      </button>
    </>
  );
}

export default App;
