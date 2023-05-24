import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as P from "./pages/index";
import * as C from "./components/index";
import * as S from "./AppStyle";
import { useRecoilState } from "recoil";
import { DarkTheme } from "state/index";

function App() {
  const [darkTheme, setDarkTheme] = useRecoilState(DarkTheme);

  return (
    <S.Body Theme={darkTheme}>
      <BrowserRouter>
        <C.Header />
        <Routes>
          <Route path="/" element={<P.MainPage />} />
        </Routes>
      </BrowserRouter>
    </S.Body>
  );
}

export default App;
