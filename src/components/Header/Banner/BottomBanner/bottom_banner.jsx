import React, { useCallback, useEffect, useRef, useState } from "react";
import { AiOutlineSearch, AiFillCaretDown } from "react-icons/ai";
import styled from "styled-components";
import { css } from "styled-components";
import { keyframes } from "styled-components";
import BrandNav from "./NavBar/BrandNav/brand_nav";
import InformationNav from "./NavBar/InforemationNav/information_nav";

import NavBar from "./NavBar/navbar";
import SearchNav from "./NavBar/SearchNav/search_nav";

const BottomBlock = styled.div``;

const BottomBannerBlock = styled.div`
  display: flex;

  justify-content: space-around;
  .icon {
    cursor: pointer;
  }
`;

const BottomLeftBlock = styled.div`
  width: 25%;

  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .icon {
    padding-right: 0.3rem;
  }
`;

const BottomCenterBlock = styled.div`
  width: 50%;
  flex: 2 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BottomRightBlock = styled.div`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  width: 25%;
`;
const PTag = styled.p`
  cursor: pointer;
`;

const HeightShow = keyframes`
    0% {
        height: 0;
    }
    100%{
        height: 30rem;
    }
`;
const HeightHide = keyframes`
    
    0%{
        height: 30rem;
    }
    100% {
        height: 0;
    }
`;

const SearchBlock = styled.div`
  position: absolute;
  background-color: white;
  width: 100%;
  overflow: hidden;
  animation: ${(props) => {
      if (props.value === true) {
        return HeightShow;
      } else {
        return HeightHide;
      }
    }}
    1s alternate forwards;
`;

function BottomBanner(props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(false);

  const onClick = (e) => {
    if (open === false) {
      setOpen(!open);
      setValue(!value);
    } else if (open === true) {
      setValue(!value);
      const time = setTimeout(() => setOpen(!open), 500);
      return clearTimeout(time);
    }
  };

  return (
    <BottomBlock>
      <BottomBannerBlock>
        <BottomLeftBlock>
          <AiOutlineSearch onClick={onClick} className="icon" />
          <PTag onClick={onClick}>SEARCH</PTag>
        </BottomLeftBlock>
        <BottomCenterBlock>
          <NavBar onClick={onClick} />
        </BottomCenterBlock>
        <BottomRightBlock>
          <PTag onClick={onClick}>BRAND</PTag>
          <AiFillCaretDown onClick={onClick} className="icon" />
        </BottomRightBlock>
      </BottomBannerBlock>
      {open && (
        <SearchBlock value={value}>
          {/* <SearchNav /> */}
          {/* <InformationNav /> */}
          <BrandNav />
        </SearchBlock>
      )}
    </BottomBlock>
  );
}

export default BottomBanner;
