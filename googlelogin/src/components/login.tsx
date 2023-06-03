import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Login = () => {
  const onSuccess = (res: any) => {
    console.log("로그인 성공~~!", res.credential);

    axios.post("ocalhost:8080/api/login/google", {
      token: res.credential,
    });
  };

  console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID);

  return (
    <GoogleLogin
      onSuccess={onSuccess}
      onError={() => {
        console.log("로그인 실패");
      }}
    ></GoogleLogin>
  );
};

export default Login;
