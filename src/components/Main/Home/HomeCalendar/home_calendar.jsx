import React from "react";
import styled from "styled-components";

const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  &::before {
    content: "";
    width: 10px;
    height: 10px;
    background-color: #3c7eef;
    border-radius: 50%;
  }
  span {
    padding-left: 0.4rem;
    padding-top: 0.2rem;
  }
`;

function HomeCalendar(props) {
  return (
    <div>
      <TitleBlock>
        <span>CALENDAR</span>
      </TitleBlock>
      <h1>calander</h1>
    </div>
  );
}

export default HomeCalendar;
