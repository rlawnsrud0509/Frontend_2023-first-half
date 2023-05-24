import * as C from "./style";
import { DarkTheme } from "state/index";
import { useRecoilValue } from "recoil";

export default function Main() {
  const darkTheme = useRecoilValue(DarkTheme);

  return (
    <C.Container>
      <C.topMenu Theme={darkTheme}></C.topMenu>
    </C.Container>
  );
}
