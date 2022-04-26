import React from "react";
import styled from "styled-components";

const UlTag = styled.ul`
  display: flex;
  height: 27rem;
  flex-direction: column;
  justify-content: space-around;
  list-style: none;
  padding-left: 0;
`;

const LiTag = styled.li`
  padding-top: 0.6rem;
`;

function ProgramNav(props) {
  return (
    <div>
      <UlTag>
        <div>
          <LiTag>WHAT THEY</LiTag>
          <LiTag>WANT 100</LiTag>
        </div>

        <div>
          <LiTag>TIMELESS</LiTag>
          <LiTag>TIMESALE</LiTag>
        </div>

        <div>
          <LiTag>SCREAM</LiTag>
        </div>
        <div>
          <LiTag>24SEASONS</LiTag>
          <LiTag>SELECTION</LiTag>
        </div>
        <div>
          <LiTag>PRICELESS</LiTag>
          <LiTag>ARCHIVE</LiTag>
        </div>
      </UlTag>
    </div>
  );
}

export default ProgramNav;
