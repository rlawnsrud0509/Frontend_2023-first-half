import styled, { keyframes } from "styled-components";
import * as C from "style";

export const Container = styled.div<{ Theme: boolean }>`
  position: absolute;
  width: 100vw;
  height: 64px;

  top: 0;
  left: 0;

  background-color: ${(props) =>
    props.Theme ? C.DarkTheme.bgColor : C.LightTheme.bgColor};

  color: ${(props) =>
    props.Theme ? C.DarkTheme.textColor : C.LightTheme.textColor};

  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  transition-timing-function: ease-out;
  transition-duration: 0.1s;
`;

export const HeaderContainer = styled.div`
  width: 90%;
  height: 64px;

  min-width: 1024px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

export const HeaderContainerTitle = styled.div<{ Theme: boolean }>`
  width: min-content;
  height: min-content;

  color: ${(props) =>
    props.Theme ? C.DarkTheme.textColor : C.LightTheme.textColor};

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

export const ThemeBtn = styled.button<{ Theme: boolean }>`
  width: 50px;
  height: 50px;

  border: none;
  border-radius: 25px;

  background: url(${(props) => props.Theme ? C.DarkTheme.ChangeBtnUrl : C.LightTheme.ChangeBtnUrl});
  background-position: center;
  background-size: 30px;
  background-repeat: no-repeat;

  transition-timing-function: ease-out;
  transition-duration: 0.1s;

  animation: none;

  &:hover {
    cursor: pointer;
  }
`;

export const SearchBtn = styled.div<{ Theme: boolean }>`
  width: 50px;
  height: 0px;

  border: none;
  border-radius: 25px;

  background: url(${(props) => props.Theme ? C.DarkTheme.SearchBtnUrl : C.LightTheme.SearchBtnUrl});
  background-position: center;
  background-size: 25px;
  background-repeat: no-repeat;

  &:hover {
    cursor: pointer;
  }
`;
