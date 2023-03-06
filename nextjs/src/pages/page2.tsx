import * as S from "./pageStyle";
import axios from "axios";
import { useEffect, useState } from "react";

function Page2(props: any) {
  let [weather, setWeather] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=35.1796&lon=129.0756&appid=7ea10aba2cc5625a2973167c849d93d7"
      )
      .then((Response) => {
        setWeather(Response.data.weather[0].description);
        console.log(Response.data.weather[0].description);
      });
  });

  return (
    <S.container>
      <S.mainDiv>
        <S.MainLayer>
          <S.MainElement>오늘 부산의 날씨는 {weather} 입니당!</S.MainElement>
        </S.MainLayer>
        <S.WeatherScreen></S.WeatherScreen>
      </S.mainDiv>
    </S.container>
  );
}

export default Page2;
