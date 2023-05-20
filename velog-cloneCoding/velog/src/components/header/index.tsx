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
              onClick={() => {
                setDarkTheme(!darkTheme);
              }}
              darkTheme={darkTheme}
            ></C.ThemeBtn>
        </C.HeaderContainerOptions>
      </C.HeaderContainer>
    </>
  );
}
