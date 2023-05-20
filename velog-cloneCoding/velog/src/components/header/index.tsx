import * as C from "./style";
import { useRecoilState } from "recoil";
import { DarkTheme } from "state/index";
import { useRef } from "react";
import { StyledObject } from "styled-components";

export default function Header() {
  const [darkTheme, setDarkTheme] = useRecoilState(DarkTheme);
  const themeBtn = useRef<HTMLButtonElement>(null);

  return (
    <>
      <C.HeaderContainer darkTheme={darkTheme}>
        <C.HeaderContainerTitle darkTheme={darkTheme}>
          velog
        </C.HeaderContainerTitle>

        <C.HeaderContainerOptions>
          <C.ThemeBtn
            onClick={() => {
              setDarkTheme(!darkTheme);
              themeBtn.current
                ? (themeBtn.current.style.animation =
                    "animation: ${ChangeTheme} ease-out 0.25s forwards;")
                : "";
            }}
            darkTheme={darkTheme}
            ref={themeBtn}
          ></C.ThemeBtn>
        </C.HeaderContainerOptions>
      </C.HeaderContainer>
    </>
  );
}
