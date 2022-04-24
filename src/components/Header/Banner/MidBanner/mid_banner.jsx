import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import Clock from "../../Title/TitleClock/clock";
import WeatherIcon from "../../Title/weatherIcon/weathericon";

const MidBannerBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MidBannerTitleBlock = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

const MidBannerTitle = styled(NavLink)`
  font-size: 2.6rem;
  text-decoration: none;
  color: black;
  font-weight: bold;
  letter-spacing: 0.4rem;
  word-spacing: 1rem;
`;

const MidBannerInfoBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  font-size: 1rem;
`;

const InfoBlock = styled.div`
  background-color: white;

  justify-content: space-around;
`;
function MidBanner(props) {
  return (
    <MidBannerBlock>
      <MidBannerTitleBlock>
        <MidBannerTitle to="/">SLOW STEADY CLUB</MidBannerTitle>
      </MidBannerTitleBlock>

      <MidBannerInfoBlock>
        <img
          src="http://slowsteadyclub.com/web/baton/images/logo/ssc_square_logo.png"
          alt=""
        />
        <Clock />
        <WeatherIcon />
      </MidBannerInfoBlock>
    </MidBannerBlock>
  );
}

export default MidBanner;
