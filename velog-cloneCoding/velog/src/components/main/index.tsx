import * as S from "./style";
import { DarkTheme } from "state/index";
import { useRecoilValue } from "recoil";
import { useRef } from "react";

export default function Main() {
  const darkTheme = useRecoilValue(DarkTheme);

  const options = useRef<any>([true, false]);

  return (
    <S.Container>
      <S.topMenu>
        <div>
          <S.ArrangeOptions
            isOptionSelcted={options.current[0]}
            ref={(el) => (options.current[0] = el)}
            Theme={darkTheme}
          >
            트렌딩
          </S.ArrangeOptions>
          <S.ArrangeOptions
            isOptionSelcted={options.current[1]}
            ref={options}
            Theme={darkTheme}
          >
            트렌딩
          </S.ArrangeOptions>
          <S.SelectionTag>이번 주</S.SelectionTag>
        </div>
        <S.SelectionTag></S.SelectionTag>
      </S.topMenu>
    </S.Container>
  );
}
