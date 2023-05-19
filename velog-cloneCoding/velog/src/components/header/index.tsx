import * as C from "./style";
import { useRecoilState } from "recoil";
import { DarkTheme } from "state";

export default function Header() {
  const Icon = require("images/header/darkMode.svg");
  const [darkTheme, setDarkTheme] = useRecoilState(DarkTheme);

  return (
    <>
      <C.HeaderContainer darkTheme={darkTheme}>
        <C.HeaderContainerTitle darkTheme={darkTheme}>
          velog
        </C.HeaderContainerTitle>
        <button
          onClick={() => {
            setDarkTheme(!darkTheme);
          }}
        >
          눌러라.
        </button>
        <C.HeaderContainerOptions>
          <C.Icon backgroundIcon={Icon}></C.Icon>
        </C.HeaderContainerOptions>
      </C.HeaderContainer>
    </>
  );
}
