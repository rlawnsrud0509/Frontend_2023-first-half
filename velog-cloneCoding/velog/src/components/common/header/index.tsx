import { useRecoilState } from "recoil";
import { DarkTheme } from "state/index";
import styled from "styled-components";
import * as C from "style";

export default function Header() {
  const [darkTheme, setDarkTheme] = useRecoilState(DarkTheme);

  return (
    <>
      <Container theme={darkTheme}>
        <HeaderContainer>
          <HeaderContainerTitle theme={darkTheme}>velog</HeaderContainerTitle>

          <HeaderContainerOptions>
            <ThemeBtn
              theme={darkTheme}
              onClick={() => {
                setDarkTheme(!darkTheme);
              }}
            ></ThemeBtn>
            <SearchBtn theme={darkTheme}></SearchBtn>
          </HeaderContainerOptions>
        </HeaderContainer>
      </Container>
    </>
  );
}

const Container = styled.div<{ theme: boolean }>`
  width: 90vw;
  height: 64px;

  color: ${(props) =>
    props.theme ? C.DarkTheme.textColor1 : C.LightTheme.textColor1};

  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  transition-timing-function: ease-out;
  transition-duration: 0.1s;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 64px;

  min-width: 1024px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const HeaderContainerTitle = styled.div<{ theme: boolean }>`
  width: min-content;
  height: min-content;

  color: ${(props) =>
    props.theme ? C.DarkTheme.textColor1 : C.LightTheme.textColor1};

  font-size: 1.5rem;
  font-family: "Fira Code", monospace;
  font-weight: 500;
`;

const HeaderContainerOptions = styled.div`
  width: min-content;
  height: min-content;

  display: flex;
  gap: 5px;
  align-items: center;
  font-size: 1rem;
`;

const ThemeBtn = styled.button<{ theme: boolean }>`
  width: 50px;
  height: 50px;

  border: none;
  border-radius: 25px;

  background: url(${(props) =>
    props.theme ? C.DarkTheme.ChangeBtnUrl : C.LightTheme.ChangeBtnUrl});
  background-position: center;
  background-size: 30px;
  background-repeat: no-repeat;

  animation: none;

  &:hover {
    cursor: pointer;
  }
`;

const SearchBtn = styled.div<{ theme: boolean }>`
  width: 50px;
  height: 0px;

  border: none;
  border-radius: 25px;

  background: url(${(props) =>
    props.theme ? C.DarkTheme.SearchBtnUrl : C.LightTheme.SearchBtnUrl});
  background-position: center;
  background-size: 25px;
  background-repeat: no-repeat;

  &:hover {
    cursor: pointer;
  }
`;
