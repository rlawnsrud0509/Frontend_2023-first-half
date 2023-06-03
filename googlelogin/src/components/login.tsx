import { GoogleLogin } from "@react-oauth/google";

const Login = () => {

  const onSuccess = (res: object) => {
    console.log("로그인 성공~~!", res);
  };

  console.log()

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
