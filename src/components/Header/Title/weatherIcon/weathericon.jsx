import React from "react";
import styled from "styled-components";
import Weather from "../Weather/weather";

function WeatherIcon() {
  const weatherInfo = Weather();
  if (!weatherInfo) return;
  const icon = weatherInfo.weather[0].icon;
  const url = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  const temp = parseInt(weatherInfo.main.temp);
  return (
    <div>
      <image src={url} alt="Weather Icon" />
      <p>
        {temp}
        °C
      </p>
    </div>
  );
}

export default WeatherIcon;
