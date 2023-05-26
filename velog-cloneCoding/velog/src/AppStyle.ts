import styled from "styled-components";
import * as C from "style";

export const Body = styled.body<{ theme: boolean }>`
  background-color: ${(props) =>
    props.theme ? C.DarkTheme.bgColor : C.LightTheme.bgColor};

  transition-timing-function: ease-out;
  transition-duration: 0.1s;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
