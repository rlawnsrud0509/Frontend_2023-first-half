import styled from "styled-components";
import * as C from "style";

export const HeaderContainer = styled.div<{ darkTheme: boolean }>`
  position: fixed;
  left: 4vw;
  width: 92vw;
  height: 64px;

  background-color: ${(props) =>
    props.darkTheme ? C.DarkTheme.bgColor : C.LightTheme.bgColor};

  color: ${(props) =>
    props.darkTheme ? C.DarkTheme.textColor : C.LightTheme.textColor};

  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  box-sizing: border-box;

  transition-timing-function: ease-out;
  transition-duration: 0.1s;
`;

export const HeaderContainerTitle = styled.div<{ darkTheme: boolean }>`
  width: min-content;
  height: min-content;

  color: ${(props) =>
    props.darkTheme ? C.DarkTheme.textColor : C.LightTheme.textColor};

  font-size: 1.5rem;
  font-family: "Fira Code", monospace;
  font-weight: 500;
`;

export const HeaderContainerOptions = styled.div`
  width: min-content;
  height: min-content;

  display: flex;

  align-items: center;

  font-size: 1rem;
`;

export const Icon = styled.div`
  margin-left: 1%;
`;
