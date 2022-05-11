import React from "react";
import styled from "styled-components";
import HomeCalendar from "./HomeCalendar/home_calendar";
import HomeNews from "./HomeNews/home_news";
import HomeToday from "./HomeToday/home_today";
import HomeWeekly from "./HomeWeekly/home_weekly";

const HomeBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  /* background-color: plum; */
`;
const HomeMidBlock = styled.div`
  display: flex;
  width: 85%;
  margin: 0 auto;
`;
const HomeLeftSide = styled.div`
  width: 65%;
`;
const HomeRightSide = styled.div`
  width: 35%;
`;
function Home(props) {
  return (
    <HomeBlock>
      <img
        src="https://slow-steady-club.s3.ap-northeast-2.amazonaws.com/wp-content/uploads/2022/04/pc_1.jpg"
        alt=""
      />
      <HomeNews />
      <HomeMidBlock>
        <HomeLeftSide>
          <HomeToday />
          <HomeWeekly />
        </HomeLeftSide>
        <HomeRightSide>
          <HomeCalendar />
        </HomeRightSide>
      </HomeMidBlock>
    </HomeBlock>
  );
}

export default Home;
