import React from "react";
import styled from "styled-components";

const ShopNavBlock = styled.div`
  display: flex;
  height: 100%;
`;
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
function ShopNav(props) {
  return (
    <ShopNavBlock>
      <UlTag>
        <div>
          <LiTag>All</LiTag>
        </div>

        <div>
          <LiTag>NEW ARRIVAL</LiTag>
          <LiTag>RESTOCK</LiTag>
          <LiTag>SEASON OFF</LiTag>
        </div>

        <div>
          <LiTag>CLOTHING</LiTag>
          <LiTag>SHOES</LiTag>
          <LiTag>ACCESSORY</LiTag>
          <LiTag>LIFESTYLE</LiTag>
          <LiTag>FOOD &</LiTag>
          <LiTag>BEVERAGE</LiTag>
        </div>
      </UlTag>
    </ShopNavBlock>
  );
}

export default ShopNav;
