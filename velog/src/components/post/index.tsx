import { mood, themeType } from "state/index";
import { useRecoilValue } from "recoil";
import * as C from "style";
import styled from "styled-components";

export default function Post() {
  const theme = useRecoilValue(mood);

  return (
    <Container mood={theme}>
      <ImgSection background="fe"></ImgSection>
      <ParagraphSection>
        <Title>알고리즘 문제풀이에 대한 이야기</Title>
        <Paragraph>
          동료들은 다 아는 정보, 나만 모르지 않게 만들어주는 일일일에서 한 주간
          개발자들이 많이 읽은 상위 10개의 아티클들을 소개합니다.
        </Paragraph>
        <Info>2023년 5월 30일 · 0개의 댓글</Info>
      </ParagraphSection>
    </Container>
  );
}

const Container = styled.div<{ mood: themeType }>`
  width: max-content;
  height: max-content;
  background-color: ${(props) => C[props.mood].bgColor};

  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  color: #ffffffba;
  background-color: ${C.DarkTheme.BtnColor1};

  border-radius: 5px;
`;

const ImgSection = styled.div<{ background: string }>`
  width: 320px;
  height: 167px;
`;

const ParagraphSection = styled.div`
  width: 320px;
  height: 165px;

  padding: 16px;
`;

const Title = styled.h4`
  margin: 0px 0px 4px;
  color: white;
`;

const Paragraph = styled.p`
  margin: 0px 0px 24px;
  font-size: 0.875rem;
`;

const Info = styled.div`
  font-size: 0.75rem;
`;
