import styled, { keyframes } from "styled-components";
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
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
`;

const ChangeTheme = keyframes`
  from {

  }
`;

export const ThemeBtn = styled.button<{ darkTheme: boolean }>`
  width: 30px;
  height: 30px;

  border: none;
  border-radius: 20px;  

  background: url("${(props) => props.darkTheme ? C.DarkTheme.url : C.LightTheme.url}");
  background-position: center;
  background-size: cover;

  transition-timing-function: ease-out;
  transition-duration: 0.1s;

  :hover {
    animation: ${ChangeTheme};
  }
`;

