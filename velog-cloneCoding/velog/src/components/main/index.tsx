import * as S from "./style";
import { DarkTheme, isOptionSelects } from "state/index";
import { useRecoilState, useRecoilValue } from "recoil";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Main() {
  const darkTheme = useRecoilValue(DarkTheme);
  const [isOptionSelected, setIsOptionSelected] =
    useRecoilState<boolean[]>(isOptionSelects);

  const tranding = useRef<HTMLButtonElement | null>(null);
  const recent = useRef<HTMLButtonElement | null>(null);

  return (
    <S.Container>
      <S.topMenu>
        <div>
          <Link to="/">
            <S.ArrangeOptions
              selected={isOptionSelected[0]}
              ref={tranding}
              Theme={darkTheme}
              onClick={() => {
                setIsOptionSelected([true, false]);
              }}
            >
              트렌딩
            </S.ArrangeOptions>
          </Link>
          <Link to="/recent">
            <S.ArrangeOptions
              selected={isOptionSelected[1]}
              ref={recent}
              Theme={darkTheme}
              onClick={() => {
                setIsOptionSelected([false, true]);
              }}
            >
              최신
            </S.ArrangeOptions>
          </Link>
          <S.SelectionTag Theme={darkTheme}>이번 주</S.SelectionTag>
          <S.SelectedLine Theme={darkTheme}></S.SelectedLine>
        </div>
        <S.SelectionTag Theme={darkTheme}>wef</S.SelectionTag>
      </S.topMenu>
    </S.Container>
  );
}
