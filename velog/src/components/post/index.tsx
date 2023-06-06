import { mood, themeType } from "state/index";
import { useRecoilValue } from "recoil";
import * as C from "style";
import styled from "styled-components";

export default function Post() {
  const theme = useRecoilValue(mood);

  return <Container mood={theme}></Container>;
}

const Container = styled.div<{ mood: themeType }>`
  width: 300px;
  height: 450px;
  background-color: ${(props) => C[props.mood].bgColor};
`;
