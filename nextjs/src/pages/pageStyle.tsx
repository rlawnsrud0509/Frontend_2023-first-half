import styled from "styled-components";

export const container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

export const mainDiv = styled.div`
  width: 60%;
  height: 80%;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const MainLayer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  height: min-content;
`;

export const MainElement = styled.div`
  width: max-content;
  height: min-content;
  color: black;
  display: flex;

  padding: 20px;
  font-size: 48px;
  font-weight: 600;
`;

export const WeatherScreen = styled.div`
  width: 80%;
  height: 70%;
  background-color: black;
  color: white;
`;
