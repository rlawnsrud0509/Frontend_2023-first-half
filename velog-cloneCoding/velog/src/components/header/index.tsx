import * as C from "./style";
import { useRecoilState } from "recoil";
import { DarkTheme } from "state/index";
import { useRef } from "react";

export default function Header() {
  const [darkTheme, setDarkTheme] = useRecoilState(DarkTheme);
  const themeBtn = useRef<any>(null);

  return (
    <>
      <C.HeaderContainer darkTheme={darkTheme}>
        <C.HeaderContainerTitle darkTheme={darkTheme}>
          velog
        </C.HeaderContainerTitle>

        <C.HeaderContainerOptions>
          <C.ThemeBtn
            darkTheme={darkTheme}
            ref={themeBtn}
            onClick={() => {
              setDarkTheme(!darkTheme);
              themeBtn.current.style.animation =
                "${C.ChangeTheme} ease-out 0.25s forwards;";
            }}
          ></C.ThemeBtn>
          <C.SearchBtn darkTheme={darkTheme}>
            
          </C.SearchBtn>
        </C.HeaderContainerOptions>
      </C.HeaderContainer>
    </>
  );
}
