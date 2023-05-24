import * as C from "./style";
import { useRecoilState } from "recoil";
import { DarkTheme } from "state/index";

export default function Header() {
  const [darkTheme, setDarkTheme] = useRecoilState(DarkTheme);

  return (
    <>
      <C.Container Theme={darkTheme}>
        <C.HeaderContainer>
          <C.HeaderContainerTitle Theme={darkTheme}>
            velog
          </C.HeaderContainerTitle>

          <C.HeaderContainerOptions>
            <C.ThemeBtn
              Theme={darkTheme}
              onClick={() => {
                setDarkTheme(!darkTheme);
              }}
            ></C.ThemeBtn>
            <C.SearchBtn Theme={darkTheme}></C.SearchBtn>
          </C.HeaderContainerOptions>
        </C.HeaderContainer>
      </C.Container>
    </>
  );
}
