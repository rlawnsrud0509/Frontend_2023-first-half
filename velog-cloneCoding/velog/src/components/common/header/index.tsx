import * as C from "./style";
import { useRecoilState } from "recoil";
import { DarkTheme } from "state/index";

export default function Header() {
  const [darkTheme, setDarkTheme] = useRecoilState(DarkTheme);

  return (
    <>
      <C.HeaderContainer darkTheme={darkTheme}>
        <C.HeaderContainerTitle darkTheme={darkTheme}>
          velog
        </C.HeaderContainerTitle>

        <C.HeaderContainerOptions>
          <C.ThemeBtn
            darkTheme={darkTheme}
            onClick={() => {
              setDarkTheme(!darkTheme);
            }}
          ></C.ThemeBtn>
          <C.SearchBtn darkTheme={darkTheme}>
            
          </C.SearchBtn>
        </C.HeaderContainerOptions>
      </C.HeaderContainer>
    </>
  );
}
