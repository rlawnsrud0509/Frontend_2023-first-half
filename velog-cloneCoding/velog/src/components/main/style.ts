import styled from "styled-components";
import * as C from "style";

export const Container = styled.div`
  width: 90vw;
  height: max-content;

  display: flex;
  margin-top: 96px;
  flex-direction: column;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

export const topMenu = styled.div`
  width: 100%;
  height: 48px;

  display: flex;
  justify-content: space-between;
`;

export const ArrangeOptions = styled.button<{
  Theme: boolean;
  isOptionSelcted: boolean;
}>`
  width: max-content;
  height: 48px;
  padding: 0px 16px 0px 16px;

  font-size: 1.25rem;
  color: ${(props) =>
    props.Theme ? C.DarkTheme.textColor1 : C.LightTheme.textColor1};
  background-color: ${(props) =>
    props.Theme ? C.DarkTheme.bgColor : C.LightTheme.bgColor};
  font-weight: ${(props) => (props.isOptionSelcted ? 600 : 500)};

  transition-timing-function: ease-out;
  transition-duration: 0.1s;

  text-align: center;
  border: none;
`;

export const SelectionTag = styled.div``;
