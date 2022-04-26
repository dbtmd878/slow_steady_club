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

function LookbookNav(props) {
  return (
    <div>
      <UlTag>
        <div>
          <LiTag>All</LiTag>
        </div>

        <div>
          <LiTag>2022</LiTag>
          <LiTag>2021</LiTag>
          <LiTag>2020</LiTag>
          <LiTag>2019</LiTag>
          <LiTag>2018</LiTag>
          <LiTag>2017</LiTag>
          <LiTag>2016</LiTag>
        </div>
      </UlTag>
    </div>
  );
}

export default LookbookNav;
