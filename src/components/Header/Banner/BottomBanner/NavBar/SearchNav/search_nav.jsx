import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SearchBlock = styled.div`
  display: flex;
  height: 20rem;
  max-width: 80%;
  margin: auto;
  margin-top: 2rem;
  flex-direction: column;
`;

const TextArea = styled.form`
  display: flex;
  width: 100%;
  position: relative;
`;

const SearchIcon = styled.div`
  position: absolute;
  line-height: 3.5rem;
  left: 0.7rem;
  color: rgb(146, 146, 146); ;
`;

const InputTag = styled.input`
  width: 100%;
  height: 3rem;
  padding-left: 2rem;
  font-size: 1rem;
  font-weight: lighter;
  letter-spacing: 1px;
  background-color: rgb(240, 240, 240);
  border-radius: 0.4rem;
  border: none;
`;

const PopularSearch = styled.div`
  margin-top: 2rem;
`;

const UlTag = styled.ul`
  list-style: none;
  padding: 0;
`;
const LiTag = styled.li`
  margin-top: 1rem;
`;
const LinkTag = styled(Link)`
  text-decoration: none;
  color: black;
`;
function SearchNav(props) {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <SearchBlock>
      <TextArea onSubmit={onSubmit}>
        <SearchIcon>
          <AiOutlineSearch />
        </SearchIcon>
        <InputTag type="text" placeholder="상품명 또는 브랜드명 검색" />
      </TextArea>
      <PopularSearch>
        <p>인기 검색어</p>
        <UlTag>
          <LiTag>
            <LinkTag to="/">NEITHERS</LinkTag>
          </LiTag>
          <LiTag>
            <LinkTag to="/">AURALEE</LinkTag>
          </LiTag>
          <LiTag>
            <LinkTag to="/">BLANKOF</LinkTag>
          </LiTag>
          <LiTag>
            <LinkTag to="/">POTRY</LinkTag>
          </LiTag>
        </UlTag>
      </PopularSearch>
    </SearchBlock>
  );
}

export default React.memo(SearchNav);
