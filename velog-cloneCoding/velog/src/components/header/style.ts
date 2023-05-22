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
  gap: 5px;
  align-items: center;
  font-size: 1rem;
`;

export const ChangeTheme = keyframes`
  0% {
    transform: scale(0) rotate(-130deg);
    opacity: 0.3;
  }

  100% {
    transform: scale(1) rotate(0deg);
    opacity: 1;
  }
`;

export const ThemeBtn = styled.button<{ darkTheme: boolean }>`
  width: 40px;
  height: 40px;

  border: none;
  border-radius: 20px;

  background: url(${(props) => props.darkTheme ? C.DarkTheme.ChangeBtnUrl : C.LightTheme.ChangeBtnUrl});
  background-position: center;
  background-size: 25px;
  background-repeat: no-repeat;

  transition-timing-function: ease-out;
  transition-duration: 0.1s;

  animation: none;

  &:hover {
    cursor: pointer;
  }
`;

export const SearchBtn = styled.div<{ darkTheme: boolean }>`
  width: 40px;
  height: 40px;

  border: none;
  border-radius: 20px;

  background: url(${(props) => props.darkTheme ? C.DarkTheme.SearchBtnUrl : C.LightTheme.SearchBtnUrl});
  background-position: center;
  background-size: 20px;
  background-repeat: no-repeat;

  &:hover {
    cursor: pointer;
  }
`;