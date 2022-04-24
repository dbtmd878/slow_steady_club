import React from "react";
import styled from "styled-components";
import MidBanner from "../Banner/MidBanner/mid_banner";

import TopBanner from "../Banner/TopBanner/top_banner";

const HeaderBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: greenyellow;
  margin-top: 2rem;
`;

function Header(props) {
  return (
    <div>
      <HeaderBlock>
        <div>
          <TopBanner />
        </div>
        <div>
          <MidBanner />
        </div>
      </HeaderBlock>
    </div>
  );
}

export default Header;
