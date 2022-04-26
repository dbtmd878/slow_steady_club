import React, { useCallback } from "react";
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

function NavBar({ onClick }) {
  const click = () => {
    onClick();
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
}

export default React.memo(NavBar);
