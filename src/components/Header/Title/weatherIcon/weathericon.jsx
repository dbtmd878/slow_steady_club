import React from "react";
import styled from "styled-components";
import Weather from "../Weather/weather";

const WeatherIconBlock = styled.div`
  display: flex;
  align-items: center;
`;

const IconImgBTag = styled.img`
  width: 2.5rem;
`;

function WeatherIcon() {
  const weatherInfo = Weather();
  if (!weatherInfo) return;
  const icon = weatherInfo.weather[0].icon;
  const url = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  const temp = parseInt(weatherInfo.main.temp);
  return (
    <WeatherIconBlock>
      <IconImgBTag src={url} alt="Weather Icon" />
      <p>
        {temp}
        °C
      </p>
    </WeatherIconBlock>
  );
}

export default WeatherIcon;
