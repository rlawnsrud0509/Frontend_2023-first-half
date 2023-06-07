import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as P from "./pages/index";
import * as C from "components/index";
import { useRecoilValue } from "recoil";
import { mood, themeType } from "state/index";
import styled from "styled-components";
import * as S from "style";

export default function App() {
  const theme = useRecoilValue(mood);

  return (
    <Body mood={theme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <P.MainPage
                children={
                  <>
                    <C.Main /> <C.Post />
                  </>
                }
              />
            }
          ></Route>
          <Route
            path="/recent"
            element={<P.MainPage children={<C.Main />} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </Body>
  );
}

const Body = styled.body<{ mood: themeType }>`
  background-color: ${(props) => S[props.mood].bgColor};

  transition-timing-function: ease-out;
  transition-duration: 0.1s;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
