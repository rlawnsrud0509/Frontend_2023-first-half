import { auth } from "../firebase";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";
import { useRecoilState } from "recoil";
import { userData } from "../state";

function GetGoogleLogin() {
  const [data, setData] = useRecoilState(userData);

  async function googleLogin() {
    const provider = new GoogleAuthProvider();

    await signInWithRedirect(auth, provider);

    // Redirect 결과 가져오기
    const result = await getRedirectResult(auth);

    // 사용자 정보 확인
    if (result?.user) {

      // userData 업데이트
      setData(result);
    }
  }

  return <button onClick={googleLogin}>구글로그인!</button>;
}

export default GetGoogleLogin;
