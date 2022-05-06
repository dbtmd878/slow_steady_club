import React from "react";
import styled from "styled-components";
import HomeNews from "./HomeNews/home_news";

const HomeBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  height: 100%;
  /* background-color: plum; */
`;

function Home(props) {
  return (
    <HomeBlock>
      <img
        src="https://slow-steady-club.s3.ap-northeast-2.amazonaws.com/wp-content/uploads/2022/04/pc_1.jpg"
        alt=""
      />
      <HomeNews />
    </HomeBlock>
  );
}

export default Home;
