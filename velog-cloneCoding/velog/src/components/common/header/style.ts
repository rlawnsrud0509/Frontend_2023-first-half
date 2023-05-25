import styled, { keyframes } from "styled-components";
import * as C from "style";

export const Container = styled.div<{ Theme: boolean }>`
  width: 90vw;
  height: 64px;

  color: ${(props) =>
    props.Theme ? C.DarkTheme.textColor1 : C.LightTheme.textColor1};

  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;

  transition-timing-function: ease-out;
  transition-duration: 0.1s;
`;

export const HeaderContainer = styled.div`
  width: 100%;
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
    props.Theme ? C.DarkTheme.textColor1 : C.LightTheme.textColor1};

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
