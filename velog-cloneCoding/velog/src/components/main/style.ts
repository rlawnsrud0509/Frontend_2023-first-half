import styled from "styled-components";
import * as C from "style";

export const Container = styled.div`
  width: 100vw;
  height: max-content;

  display: flex;
  margin-top: 80px;
  flex-direction: column;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

export const topMenu = styled.div<{ Theme: boolean }>`
  width: 100%;
  height: 48px;

  display: flex;
  justify-content: space-between;
`;

export const topMenuOption = styled.button<{ Theme: boolean }>`
  width: 112px;
  height: 48px;

  font-size: 1.5rem;
  color: ${(props) =>
    props.Theme ? C.DarkTheme.textColor : C.LightTheme.textColor};

  text-align: center;
`;
