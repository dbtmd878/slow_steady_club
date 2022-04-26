import React from "react";
import styled from "styled-components";
import DocuNav from "./DocuNav/docu_nav";
import LookbookNav from "./LookBookNav/lookbook_nav";
import ProgramNav from "./ProgramNav/program_nav";
import SerialNav from "./SerialNav/serial_nav";
import ShopNav from "./ShopNav/shop_nav";

const InformationBlock = styled.div`
  display: flex;
  height: 100%;
`;

const UlTag = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;
const LiTag = styled.li``;
const PTag = styled.p`
  font-weight: bold;
  margin-bottom: 0;
`;

function InformationNav(props) {
  return (
    <InformationBlock>
      <UlTag>
        <LiTag>
          <PTag>SHOP</PTag>
          <ShopNav />
        </LiTag>
        <LiTag>
          <PTag>PROGRAM</PTag>
          <ProgramNav />
        </LiTag>
        <LiTag>
          <PTag>DOCU</PTag>
          <DocuNav />
        </LiTag>
        <LiTag>
          <PTag>LOOKBOOK</PTag>
          <LookbookNav />
        </LiTag>
        <LiTag>
          <PTag>SERIAL</PTag>
          <SerialNav />
        </LiTag>
      </UlTag>
    </InformationBlock>
  );
}

export default InformationNav;
