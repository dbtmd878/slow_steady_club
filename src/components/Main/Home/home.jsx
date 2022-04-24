import React from "react";
import styled from "styled-components";

const HomeBlock = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: red;
`;

function Home(props) {
  return (
    <HomeBlock>
      <h1>this is home</h1>
      <div>
        <h1>this is home</h1>
      </div>
    </HomeBlock>
  );
}

export default Home;
