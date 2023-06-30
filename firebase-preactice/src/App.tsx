import "./App.css";
import { useState } from "react";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { database } from "./firebase";
import GetGoogleLogin from "./apis/signInGoogleWithRedirect";
import GetGoogleLogout from "./apis/signOutGoogleWithRedirect";
import { useRecoilValue } from "recoil";
import { userData } from "./state";

function App() {
  const [userId, setUserId] = useState(0);
  const [userName, setUserName] = useState("");
  const [data, setData] = useState(Object);
  const [userFootSize, setUserFootSize] = useState(0);
  const [searchUserId, setSearchUserId] = useState(0);
  const userData1 = useRecoilValue(userData);

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
          setDoc(
            doc(database, `user/${userData1?.user.email}`, userId.toString()),
            {
              userId,
              userName,
              userFootSize,
            }
          );
        }}
      >
        (값)넣어줘
      </button>
      <p>
        <input
          onChange={(e) => {
            setSearchUserId(+e.target.value);
          }}
        />
        <button
          onClick={() => {
            getDoc(
              doc(
                database,
                `user/${userData1?.user.email}`,
                searchUserId.toString()
              )
            )
              .then((value) => {
                console.log("불러오기성공", value.data());
                setData(value.data());
              })
              .catch((e) => {
                console.log("불러오기실패");
              });
          }}
        >
          (값)보여줘
        </button>
        {data.userId} {data.userName} {data.userFootSize}
      </p>
      <GetGoogleLogin />
    </>
  );
}

export default App;
