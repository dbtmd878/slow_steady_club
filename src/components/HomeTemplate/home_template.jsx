import React from "react";
import styled from "styled-components";

const HomeTemplateBlock = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
`;

function HomeTemplate({ children }) {
  return <HomeTemplateBlock>{children}</HomeTemplateBlock>;
}

export default HomeTemplate;
