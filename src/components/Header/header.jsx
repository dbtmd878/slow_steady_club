import React from "react";
import styled from "styled-components";
import BottomBanner from "./Banner/BottomBanner/bottom_banner";
import MidBanner from "./Banner/MidBanner/mid_banner";

import TopBanner from "./Banner/TopBanner/top_banner";

const HeaderBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

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
        <div>
          <BottomBanner />
        </div>
      </HeaderBlock>
    </div>
  );
}

export default Header;
