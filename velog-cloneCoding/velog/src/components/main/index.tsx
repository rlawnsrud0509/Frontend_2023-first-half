import * as C from "./style";
import { useRecoilState } from "recoil";
import { DarkTheme } from "state";

export default function Main() {
  const [darkTheme, setDarkTheme] = useRecoilState(DarkTheme);

  return (
    <C.Container>
      <button
        onClick={() => {
          setDarkTheme(!darkTheme);
        }}
      >
        눌러라.
      </button>
    </C.Container>
  );
}
