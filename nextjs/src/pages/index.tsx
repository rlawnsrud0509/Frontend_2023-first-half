import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const MainDiv = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
  background-color: white;
  gap: 9%;
`;

const MainLayer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  height: min-content;
`;

const MainElement = styled.div`
  width: max-content;
  height: min-content;
  color: black;
  padding: 20px;
  font-size: 48px;
  font-weight: 600;
`;

const AreaButton = styled.button`
  background-color: black;
  width: max-content;
  height: min-content;
  padding: 20px;
  font-size: 24px;
  font-weight: 600;
  border: 0;
  border-radius: 10px;
  outline: 0;

  transition-duration: 0.25s;
  transition-timing-function: ease-out;

  :hover {
    background-color: #333333;
  }

  :active {
    transition-duration: 0.05s;
    transform: scale(0.9);
  }
`;

export default function Home() {
  return (
    <>
      <Container>
        <MainDiv>
          <MainLayer>
            <MainElement>날씨 정보에용</MainElement>
          </MainLayer>

          <MainLayer>
            <Link href="/page1">
              <AreaButton>서울의 날씨~</AreaButton>
            </Link>
            <Link href="/page2">
            <AreaButton>부산의 날씨~</AreaButton>
            </Link>
            <Link href="/page3">
            <AreaButton>인천의 날씨~</AreaButton>
            </Link>
          </MainLayer>
          <MainLayer>
          <Link href="/page4">
            <AreaButton>대구의 날씨~</AreaButton>
            </Link>
            <Link href="/page5">
            <AreaButton>광주의 날씨~</AreaButton>
            </Link>
            <Link href="/page6">
            <AreaButton>대전의 날씨~</AreaButton>
            </Link>
          </MainLayer>
        </MainDiv>
      </Container>
    </>
  );
}
