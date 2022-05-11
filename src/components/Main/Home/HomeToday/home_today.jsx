import React, { useState } from "react";
import Weather from "../../../Header/Title/Weather/weather";
import styled from "styled-components";
import Spinner from "../../../Spinner/spinner";

const HomeTodayBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  &::before {
    content: "";
    width: 10px;
    height: 10px;
    background-color: #03ff03;
    border-radius: 50%;
  }
  span {
    padding-left: 0.4rem;
    padding-top: 0.2rem;
  }
`;
const MainBlock = styled.div`
  display: flex;
`;
const WeahterBlock = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
`;

const IconBlock = styled.img`
  width: 2rem;
  height: 2rem;
`;
const DescriptionBlock = styled.div`
  display: flex;
  width: 70%;
  margin-right: 100px;
  p {
    font-weight: 400;
    font-size: 0.813rem;
    line-height: 1.6;
  }
`;
const HomeToday = () => {
  const [loading, setLoading] = useState(false);
  const arr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth() < 10 ? "0" + time.getMonth() : time.getMonth();
  const date = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
  const day = arr[time.getDay()];

  const weather = new Weather();
  const obj = {};

  if (Object.keys(weather).length !== 0) {
    obj.temp = weather.main.temp;
    obj.name = weather.name;
    obj.icon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }

  return (
    <HomeTodayBlock>
      <TitleBlock>
        <span>TODAY</span>
        <span>
          {year}
          {month}
          {date}({day})
        </span>
      </TitleBlock>

      <MainBlock>
        {loading ? (
          <WeahterBlock>
            <h3>{obj.name}</h3>
            <IconBlock src={obj.icon} alt="" srcset="" />
            <h3>{obj.temp}°C</h3>
          </WeahterBlock>
        ) : (
          <Spinner />
        )}

        <DescriptionBlock>
          <p>
            지나가는 아는 사람을 우연히 만나게 되는 경우가 요새 종종 있는데요.
            그럴 때면 대부분 가야 하는 길을 다른 방법으로 가거나 돌아갈 때
            발생하고 있습니다. 그 우연이 완성되는 것까지 난 여러 가지 선택 속
            상황이 서로 맞아야 한다는 점에서 신기한 부분 아닐까 생각이 들기도
            합니다. 오늘도 우연히 반가운 얼굴을 만날 수 있는 하루가 되었으면
            좋겠네요. 모두 행복하고 건강한 일요일 보내시길 바랍니다. 감사합니다.
          </p>
        </DescriptionBlock>
      </MainBlock>
    </HomeTodayBlock>
  );
};

export default HomeToday;
