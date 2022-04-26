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

function DocuNav(props) {
  return (
    <div>
      <UlTag>
        <div>
          <LiTag>All</LiTag>
        </div>

        <div>
          <LiTag>MAN</LiTag>
          <LiTag>WOMAN</LiTag>
        </div>
      </UlTag>
    </div>
  );
}

export default DocuNav;
