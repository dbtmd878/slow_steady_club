import React from "react";
import styled from "styled-components";

const ItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  padding-right: 1rem;
`;
const ImageBlock = styled.div`
  width: 100%;
  background-color: rgb(246, 246, 246);
  text-align: center;
`;
const ImageTag = styled.img`
  width: 100%;
`;

const ItemTitleBlock = styled.div`
  h1 {
    font-size: 1rem;
    margin-bottom: 0.3rem;
  }
  h2 {
    font-size: 0.9rem;
    font-weight: 400;
    margin-top: 0;
  }
`;

const ItemDescriptionBlock = styled.div`
  p {
    font-size: 0.9rem;
    line-height: 1.3rem;
    font-weight: 400;
  }
`;
function WeeklyItem({ item }) {
  const { image, company, name, description, writer } = item;
  const imageUrl = require(`assets/image/${image}.png`);

  return (
    <ItemBlock>
      <ImageBlock>
        <ImageTag src={imageUrl} alt="item image" />
      </ImageBlock>
      <div>
        <ItemTitleBlock>
          <h1>{company}</h1>
          <h2>{name}</h2>
        </ItemTitleBlock>
        <ItemDescriptionBlock>
          <p>{description}</p>
        </ItemDescriptionBlock>
        <p>By {writer}</p>
      </div>
    </ItemBlock>
  );
}

export default WeeklyItem;
