import React from "react";
import styled from "styled-components";
const FooterBlock = styled.div`
  display: flex;
  background-color: blue;
`;

function Footer(props) {
  return (
    <FooterBlock>
      <h1>this is footer</h1>
    </FooterBlock>
  );
}

export default Footer;
