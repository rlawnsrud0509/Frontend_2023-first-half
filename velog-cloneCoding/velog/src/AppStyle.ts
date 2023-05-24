import styled from "styled-components";
import * as C from "style";

export const Body = styled.body<{ Theme: boolean }>`
  background-color: ${(props) =>
    props.Theme ? C.DarkTheme.bgColor : C.LightTheme.bgColor};

  transition-timing-function: ease-out;
  transition-duration: 0.1s;
`;
