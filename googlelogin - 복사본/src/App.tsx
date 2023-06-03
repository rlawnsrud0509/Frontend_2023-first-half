import * as C from "./components/index";
// import { useEffect } from "react";
// import { gapi } from "gapi-script";

function App() {
  // const clientId =
  //   "1084233569945-n777ppj33vvk4titdlvm6imqup7jfj25.apps.googleusercontent.com";

  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: "",
  //     });
  //   }

  //   gapi.load("client:auth2", start);
  // }, []);

  return (
    <>
      <C.Login />
    </>
  );
}

export default App;
