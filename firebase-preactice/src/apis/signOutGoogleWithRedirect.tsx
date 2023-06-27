import { auth } from "../firebase";
import { signOut } from "firebase/auth";

function GetGoogleLogout() {
  async function googleLogout() {
    const googleLogout1 = await signOut(auth)
      .then(() => {
        console.log("로그아웃성공");
      })
      .catch(() => {
        console.log("로그아웃실패");
      });

    return <button onClick={googleLogout}>구글로그아웃!</button>;
  }
}
export default GetGoogleLogout;
