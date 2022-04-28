import React, { useState } from "react";
import { AiOutlineSearch, AiFillCaretDown } from "react-icons/ai";
import styled from "styled-components";
import { keyframes } from "styled-components";
import BrandNav from "./NavBar/BrandNav/brand_nav";
import InformationNav from "./NavBar/InforemationNav/information_nav";
import NavBar from "./NavBar/navbar";
import NavbarType from "./NavBar/navbar_type";
import SearchNav from "./NavBar/SearchNav/search_nav";

// CSS
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

const BottomBanner = (props) => {
  // 컴포넌트 open할지 말지 관리
  const [open, setOpen] = useState(false);
  // 컴포넌트 애니메이션 관리
  const [value, setValue] = useState(false);
  // 어떤 컴포넌트를 open할지 관리 + 위 두개 state도 추가
  const [state, setState] = useState("");

  const onClick = (type) => {
    if (open === false) {
      setOpen(!open);
      console.log(open);
      setState(type);
      setValue(!value);
    } else {
      const timer = setTimeout(() => setOpen(!open), 500);
      setValue(!value);
      setState(type);
      return clearTimeout(timer);
    }
  };

  return (
    <BottomBlock>
      <BottomBannerBlock>
        <BottomLeftBlock>
          <AiOutlineSearch onClick={() => onClick("SEARCH")} className="icon" />
          <PTag onClick={() => onClick("SEARCH")}>SEARCH</PTag>
        </BottomLeftBlock>
        <BottomCenterBlock>
          <NavBar onClick={onClick} />
        </BottomCenterBlock>
        <BottomRightBlock>
          <PTag onClick={() => onClick("BRAND")}>BRAND</PTag>
          <AiFillCaretDown onClick={() => onClick("BRAND")} className="icon" />
        </BottomRightBlock>
      </BottomBannerBlock>
      {open && (
        <SearchBlock value={value}>
          <NavbarType type={state} />
        </SearchBlock>
      )}
    </BottomBlock>
  );
};

export default BottomBanner;
