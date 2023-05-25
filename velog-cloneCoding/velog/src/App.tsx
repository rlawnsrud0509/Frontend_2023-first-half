import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as P from "./pages/index";
import * as S from "./AppStyle";
import { useRecoilValue } from "recoil";
import { DarkTheme } from "state/index";

function App() {
  const darkTheme = useRecoilValue(DarkTheme);

  return (
    <S.Body Theme={darkTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<P.MainPage />} />
        </Routes>
      </BrowserRouter>
    </S.Body>
  );
}

export default App;
