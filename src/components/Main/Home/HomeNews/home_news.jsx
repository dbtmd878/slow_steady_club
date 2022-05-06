import React from "react";
import styled from "styled-components";

const HomeNewsBlock = styled.div`
  margin: 0 auto;
  width: 85%;
`;

const NewsContainer = styled.div`
  display: flex;
  margin: 5rem 0;
`;

const NewsTitleBlock = styled.div`
  flex-direction: column;
  padding: 20px;
  flex: 1;
  h2 {
    font-size: 2rem;
    font-weight: bolder;
  }
  h4 {
    margin: 0;
    font-size: 1.3rem;
  }
`;

const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  &::before {
    content: "";
    width: 10px;
    height: 10px;
    background-color: #03ff03;
    border-radius: 50%;
  }
  span {
    padding-left: 0.4rem;
    padding-top: 0.2rem;
  }
`;

const NewDescritption = styled.div`
  display: flex;
  line-height: 1.8rem;
  padding: 1.25rem;
  flex: 1;
  margin-top: 1.25rem;
`;

function HomeNews(props) {
  return (
    <HomeNewsBlock>
      <NewsContainer>
        <NewsTitleBlock>
          <TitleBlock>
            <span>NEWS</span>
          </TitleBlock>
          <h2>
            HUGE BOOTH 013
            <br /> BLUEPEACE FISHING CLUB
          </h2>
          <h4>사은품: DISPOSABLE CAMERA</h4>
          <h4>증정시점: 2022sus 5월 1일 0시</h4>
          <h4>증정대상: 15만원 이상 구매 고객</h4>
          <h4>선착순(조기 품절 시 마감)</h4>
        </NewsTitleBlock>

        <NewDescritption>
          <p>
            이번 2022년 ‘바다의 날’을 맞이하여, 네이더스에서는 BLUEPEACE FISHING
            CLUB (블루 피스 피싱 클럽)이라는 서브레이블을 완성했습니다. 블루
            피스 피싱 클럽은 건전한 낚시 동호회로 위장, 잠입하여 불법포경꾼들을
            추적, 고발하는 집단이라는 콘셉트를 가지고 있습니다. 여느 낚시꾼들
            혹은 어류 업계 종사자들 속에서 들키지 않게 헤리티지 디테일을 더한
            낚시 의류, 어업용 의류 뿐만 아니라 잠입하여 생존해야하는 상황에서
            필요한 일시적 주거공간인 텐트, 램프, 요리, 커피 등 아웃도어 라이프
            스타일 또한 함께 다루고 있습니다.
          </p>
        </NewDescritption>
        <NewDescritption>
          <p>
            또한, 환경을 가능한 덜 해치는 방향으로 데드스톡 (Deadstock) 원단을
            사용하거나, 제품을 해체한 후 재활용하여 만드는 방식, 친환경 재료
            등을 고려함으로써 단순히 불법 포경꾼으로부터 보호하는 것을 넘어
            환경오염으로부터 동물 보호를 함께 고려하는 것을 추구하는 서브
            레이블입니다. <br />
            <br />
            이번 2022 캠페인은, 네이더스의 정신과 해당 캠페인을 시작한 동기와
            메세지를 보다 쉽게 전달하고자 7분 정도의 페이크 다큐멘터리 영화를
            준비했습니다. 해당 내용에서는 네이더스에서 왜 서브레이블을 만들게
            되었는지 그리고 그것을 어떻게 전개할 예정인지를 직, 간접적으로
            시사하고 있습니다. 많은 시청과 관심 부탁드립니다. 감사합니다.
          </p>
        </NewDescritption>
      </NewsContainer>
    </HomeNewsBlock>
  );
}

export default HomeNews;
