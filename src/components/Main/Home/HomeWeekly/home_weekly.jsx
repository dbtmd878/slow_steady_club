import React, { useState } from "react";
import WeeklyItem from "./WeeklyItem/weekly_item";
import styled from "styled-components";

const HomeWeeklyBlock = styled.div`
  display: flex;
  flex-direction: column;
`;
const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 1rem;
  &::before {
    content: "";
    width: 10px;
    height: 10px;
    background-color: #f690f6;
    border-radius: 50%;
  }
  span {
    padding-left: 0.4rem;
    padding-top: 0.2rem;
  }
`;

const ItemBlock = styled.div`
  display: flex;
`;
function HomeWeekly(props) {
  const [state, setState] = useState({
    1: {
      image: "pants",
      company: "MEPEN",
      name: "Classic TROUSERS(WARM BAIGE)",
      description:
        "베이직하고 클래식한 코튼 팬츠를 찾으신다면 추천드립니다! 코튼 100%이며 이탈리안 데드스탁 패브릭으로 제작한 팬츠라 희소성까지 있고! 스트레이트 핏이라 여유 있게 착용 가능하며 시원한 소재감까지 가진 CLASSIC TROUSERS를 다가오는 여름에 꼭 즐겨보시길 바랍니다!!",
      writer: "AAA",
    },
    2: {
      image: "hats",
      company: "RUS",
      name: "BERU HAT (LIME)",
      description:
        "휴양지에서 쓸만한 모자를 찾고 계셨다면 러스의 BERU HAT은 어떠세요? 작아서 귀여운 챙과 바람에 날아가지 않도록 도와주는 끈까지! 여름과 잘 어울리는 색을 취향 따라 골라보세요",
      writer: "BBB",
    },
    3: {
      image: "shirts",
      company: "FRESH SERVICE",
      name: "OXFORD FLAP POCKET L/S SHIRT (BLUE)",
      description:
        "아우터와 셔츠, 그 사이 어딘가에 있는 활용성 좋은 셔츠입니다. 프런트 부분 4개의 포켓으로 간단한 소지품 정리에 최적화되어있으며, 전부 오픈하여 아우터로의 용도로 입어도 굿! 바디 품이 넓어 볼륨 있는 실루엣으로 사이즈에 구애 없이 즐기실 수 있어요.",
      writer: "CCC",
    },
    4: {
      image: "shoes",
      company: "NEITHERS",
      name: "GERMAN MILITARY TRAINER WITH REPRODUCTION OF FOUND (WHITE)",
      description:
        "REPRODUCTION OF FOUND의 인기제품인 GERMAN MILITARY와 네이더스가 콜라보를 했습니다!! 기존에 가죽과 스웨이드가 아닌 올 가죽으로 더욱 더 깔끔한 느낌이에요 흔하지 않다는게 콜라보 제품의 가장 큰 장점 아닐까요?!",
      writer: "DDD",
    },
  });

  return (
    <HomeWeeklyBlock>
      <TitleBlock>
        <span>WEEKLY CURATION</span>
      </TitleBlock>
      <ItemBlock>
        {Object.keys(state).map((id) => (
          <WeeklyItem item={state[id]} key={id} />
        ))}
      </ItemBlock>
    </HomeWeeklyBlock>
  );
}

export default HomeWeekly;
