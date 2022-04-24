import React, { useContext } from "react";
import {
  AiFillShopping,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai";
import { HiUser } from "react-icons/hi";
import { BsCalendar2WeekFill } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
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
  background-color: white;
  justify-content: center;
`;

const TopLeftBlock = styled.div`
  display: flex;
  background-color: red;
  width: 25%;
  justify-content: center;
`;
const TopRightBlock = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  background-color: orange;
`;

function TopBanner(props) {
  const dispatch = useIconDispatch();

  const onClick = (e) => {
    dispatch({ type: e.target.id });
  };
  return (
    <TopBannerBlock>
      <TopLeftBlock>
        <div onClick={onClick}>
          <AiOutlineYoutube id="INSTA" />
        </div>
        <div onClick={onClick}>
          <AiOutlineInstagram id="YOUTUBE" />
        </div>
      </TopLeftBlock>

      <TopMidBlock>
        <Link to="/">WWW.SLOWSTEADYCLUB.COM</Link>
      </TopMidBlock>
      <TopRightBlock>
        <div>
          <AiFillShopping />
        </div>
        <div>
          <BsCalendar2WeekFill />
        </div>
        <div>
          <HiUser />
        </div>
      </TopRightBlock>
    </TopBannerBlock>
  );
}

export default TopBanner;
