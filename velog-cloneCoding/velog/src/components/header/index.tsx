import * as C from "./style";
import { useRecoilState } from "recoil";
import { DarkTheme } from "state";

export default function Header() {
  const [darkTheme, setDarkTheme] = useRecoilState(DarkTheme);

  return (
    <>
      <C.HeaderContainer darkTheme={darkTheme}>
        <C.HeaderContainerTitle darkTheme={darkTheme}>
          velog
        </C.HeaderContainerTitle>

        <C.HeaderContainerOptions>
          <C.Icon>
            <button
              onClick={() => {
                setDarkTheme(!darkTheme);
              }}
            >
              눌러라
            </button>
          </C.Icon>
        </C.HeaderContainerOptions>
      </C.HeaderContainer>
    </>
  );
}
