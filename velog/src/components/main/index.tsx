import { DarkTheme, isOptionSelects } from "state/index";
import { useRecoilState, useRecoilValue } from "recoil";
import { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import * as C from "style";
import { keyframes } from "styled-components";

export default function Main() {
  const darkTheme = useRecoilValue(DarkTheme);
  const [isOptionSelected, setIsOptionSelected] =
    useRecoilState<boolean[]>(isOptionSelects);

  const tranding = useRef<HTMLButtonElement | null>(null);
  const recent = useRef<HTMLButtonElement | null>(null);

  return (
    <Container>
      <TopMenu>
        <GrowpOptions>
          <Link to="/">
            <ArrangeOptions
              selected={isOptionSelected[0]}
              ref={tranding}
              theme={darkTheme}
              onClick={() => {
                setIsOptionSelected([true, false]);
              }}
            >
              트렌딩
            </ArrangeOptions>
          </Link>
          <Link to="/recent">
            <ArrangeOptions
              selected={isOptionSelected[1]}
              ref={recent}
              theme={darkTheme}
              onClick={() => {
                setIsOptionSelected([false, true]);
              }}
            >
              최신
            </ArrangeOptions>
          </Link>

          {isOptionSelected[0] && (
            <SelectionTag theme={darkTheme}>이번 주</SelectionTag>
          )}

          <SelectedLine
            theme={darkTheme}
            selected={isOptionSelected}
          ></SelectedLine>
        </GrowpOptions>
        <SelectionTag theme={darkTheme}>wef</SelectionTag>
      </TopMenu>
    </Container>
  );
}

const Container = styled.div`
  width: 90vw;
  height: max-content;

  display: flex;
  margin-top: 32px;
  flex-direction: column;
  flex-wrap: wrap;
  box-sizing: border-box;
`;

const TopMenu = styled.div`
  width: 100%;
  height: 48px;

  display: flex;
  justify-content: space-between;
`;

const GrowpOptions = styled.div`
  width: max-content;
  height: min-content;

  position: relative;

  display: flex;
  align-items: center;
`;

const ArrangeOptions = styled.button<{
  theme: boolean;
  selected: boolean;
}>`
  width: 112px;
  height: 48px;
  padding: 0px 16px 0px 16px;

  font-size: 1.25rem;
  color: ${(props) =>
    props.selected
      ? props.theme
        ? C.DarkTheme.textColor1
        : C.LightTheme.textColor1
      : props.theme
      ? C.DarkTheme.textColor2
      : C.LightTheme.textColor2};
  background-color: ${(props) =>
    props.theme ? C.DarkTheme.bgColor : C.LightTheme.bgColor};
  font-weight: ${(props) => (props.selected ? 600 : 500)};

  transition-timing-function: ease-out;
  transition-duration: 0.1s;

  text-align: center;
  border: none;
`;

const moveLine = (isLeftSelected: boolean) => keyframes`
  from {
    ${isLeftSelected ? "left: 112px" : "left: 0px"};
  }

  to {
    ${isLeftSelected ? "left: 0px" : "left: 112px"};
  }
`;

const SelectedLine = styled.div<{ theme: boolean; selected: boolean[] }>`
  width: 112px;
  height: 2px;

  position: absolute;
  bottom: 0px;

  background-color: ${(props) =>
    props.theme ? C.DarkTheme.LineColor : C.LightTheme.LineColor};

  animation: ${(props) =>
    props.selected[0]
      ? moveLine(props.selected[0])
      : moveLine(props.selected[1])};
  animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
  animation-fill-mode: forwards;
  animation-duration: 0.45s;

  z-index: 1;
`;

const SelectionTag = styled.div<{ theme: boolean }>`
  width: 72px;
  height: 32px;
  line-height: 32px;

  background-color: ${(props) =>
    props.theme ? C.DarkTheme.BtnColor1 : C.LightTheme.BtnColor1};
  color: ${(props) =>
    props.theme ? C.DarkTheme.textColor1 : C.LightTheme.textColor1};

  padding: 0px 16px 0px 16px;

  font-size: 1rem;
  font-weight: 600;

  transition-timing-function: ease-out;
  transition-duration: 0.1s;

  text-align: center;
  border: none;
`;
