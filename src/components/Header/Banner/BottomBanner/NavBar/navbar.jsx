import React from "react";
import styled from "styled-components";

const NavBarBlock = styled.div``;

const UlList = styled.ul`
  list-style: none;
  display: flex;
`;

const LiList = styled.li`
  margin-right: 3rem;
  cursor: pointer;
`;

const NavBar = ({ onClick }) => {
  const click = () => {
    return onClick("NAVINFO");
  };
  return (
    <NavBarBlock>
      <UlList>
        <LiList onClick={click}>SHOP</LiList>
        <LiList onClick={click}>PROGRAM</LiList>
        <LiList onClick={click}>DOCU</LiList>
        <LiList onClick={click}>LOOKBOOK</LiList>
        <LiList onClick={click}>SERIAL</LiList>
      </UlList>
    </NavBarBlock>
  );
};

export default React.memo(NavBar);
