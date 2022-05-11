import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useIconDispatch } from "../../../Context/icon_context";
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
  align-items: center;
  font-size: 1rem;
`;

const LeftIconBlock = styled.div`
  text-align: right;
  width: 25%;
`;
const LeftIconTag = styled.img`
  cursor: pointer;
  width: 8rem;
`;
const CenterDaysBlock = styled.div`
  width: 50%;
`;
const RightTempBlcok = styled.div`
  width: 25%;
`;

function MidBanner(props) {
  const dispatch = useIconDispatch();
  const onClick = () => {
    dispatch({ type: "HOME" });
  };
  return (
    <MidBannerBlock>
      <MidBannerTitleBlock>
        <MidBannerTitle to="/">SLOW STEADY CLUB</MidBannerTitle>
      </MidBannerTitleBlock>

      <MidBannerInfoBlock>
        <LeftIconBlock>
          <LeftIconTag
            onClick={onClick}
            src="http://slowsteadyclub.com/web/baton/images/logo/ssc_square_logo.png"
            alt="logo"
          />
        </LeftIconBlock>
        <CenterDaysBlock>
          <Clock />
        </CenterDaysBlock>
        <RightTempBlcok>
          <WeatherIcon />
        </RightTempBlcok>
      </MidBannerInfoBlock>
    </MidBannerBlock>
  );
}

export default MidBanner;
