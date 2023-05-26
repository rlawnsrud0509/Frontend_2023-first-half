import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as P from "./pages/index";
import * as S from "./AppStyle";
import * as C from "components/index";
import { useRecoilValue } from "recoil";
import { DarkTheme } from "state/index";

function App() {
  const darkTheme = useRecoilValue(DarkTheme);

  return (
    <S.Body theme={darkTheme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<P.MainPage children={<C.Main></C.Main>} />}
          ></Route>
          <Route
            path="/recent"
            element={<P.MainPage children={<C.Main></C.Main>} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </S.Body>
  );
}

export default App;

