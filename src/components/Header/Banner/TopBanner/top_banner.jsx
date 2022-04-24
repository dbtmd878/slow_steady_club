import React, { useContext } from "react";
import {
  AiFillShopping,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { HiUser } from "react-icons/hi";
import { BsCalendar2WeekFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useIconDispatch } from "../../../Context/icon_context";
import styled from "styled-components";

const TopBannerBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const TopMidBlock = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
`;

const IconBlock = styled.div`
  margin: 0 0.4rem;
  cursor: pointer;
`;

const TopMidUrlLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 0.9rem;
`;

const TopLeftBlock = styled.div`
  display: flex;
  width: 25%;
  justify-content: center;
`;
const TopRightBlock = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
`;

function TopBanner(props) {
  const dispatch = useIconDispatch();

  const onClick = (e) => {
    console.log(e.target);
    dispatch({ type: e.target.id });
  };
  return (
    <TopBannerBlock>
      <TopLeftBlock>
        <IconBlock>
          <AiOutlineYoutube onClick={onClick} id="INSTA" />
        </IconBlock>
        <IconBlock>
          <AiOutlineInstagram onClick={onClick} id="YOUTUBE" />
        </IconBlock>
      </TopLeftBlock>

      <TopMidBlock>
        <TopMidUrlLink to="/">WWW.SLOWSTEADYCLUB.COM</TopMidUrlLink>
      </TopMidBlock>
      <TopRightBlock>
        <IconBlock>
          <AiFillShopping />
        </IconBlock>
        <IconBlock>
          <BsCalendar2WeekFill />
        </IconBlock>
        <IconBlock>
          <HiUser />
        </IconBlock>
      </TopRightBlock>
    </TopBannerBlock>
  );
}

export default TopBanner;
