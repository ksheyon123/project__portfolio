import React from "react";
import styled from "styled-components";
import {
  useHistory
} from "react-router-dom";
import {
  useRecoilState
} from "recoil";
import {
  pageTransition
} from "../states/GlobalState";
import { OutlineLabel__FULL, Flex, Wrapper, RNB, RightWing } from "../components/common";
import { ViewMore } from "../components/common/ViewMore";
import { relative } from "path";

const StyledShortcut = styled.div`
  display : flex;
  padding : 10px 0px;
`;

const StyledCardBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 20px;
  padding : 15px;
`;

const StyledCard = styled.div<{ bgColor: string; }>`
  border-radius: 5px;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.09);
  background-color : #FFF;
  & > div.banner {
    display: flex;
    border-top-left-radius : 5px;
    border-top-right-radius : 5px;
    background-color: ${props => props.bgColor};
    height : 150px;
    justify-content: center;
    align-items: center;
  }
  & > div.desc {
    height : 100px;
    padding : 15px;
    border-bottom: 1px solid rgb(235, 235, 235);
    overflow : hidden;
    text-overflow: ellipsis;
  }
  & > div.footer {
    height : 30px;
  }
`;

interface CardProps {
  title: string;
  img?: string;
  desc?: string;
  created: number;
}

const Card: React.FC<{ list: CardProps[] }> = (props) => {
  const {
    list
  } = props;
  return (
    <>
      {
        list.map((el: CardProps, i: number) => {
          const {
            title,
            img,
            desc,
            created
          } = el;
          return (
            <StyledCard bgColor={"rgb(37, 77,187)"}>
              <div className="banner">
                {
                  !!img ?
                    (
                      <img src={img} alt={title} />
                    ) : (
                      title
                    )
                }
              </div>
              <div className="desc">
                {desc}
              </div>
              <div className="footer">
                {new Date(created).toISOString().substring(0, 10)}
              </div>
            </StyledCard>
          )
        })
      }

    </>
  )
}

const MainPage: React.FC = () => {
  // The content of card consist of title, img, background-color, description, created, etc...
  const cardList = [
    {
      title: "Portfolio Page의 시작",
      desc: "제 첫 포트폴리오 페이지를 소개합니다. 제 포트폴리오 페이지는 집중적으로 개발한 것이 아니라서 생각보다 오랜 시간이 걸렸지만, 조금씩 차근차근 작업해나가는 재미가 있었습니다.",
      created: new Date("2021/11/19").valueOf(),
    },
    {
      title: "Portfolio Page의 시작",
      desc: "제 첫 포트폴리오 페이지를 소개합니다. 제 포트폴리오 페이지는 집중적으로 개발한 것이 아니라서 생각보다 오랜 시간이 걸렸지만, 조금씩 차근차근 작업해나가는 재미가 있었습니다.",
      created: new Date("2021/11/19").valueOf(),
    },
    {
      title: "Portfolio Page의 시작",
      desc: "제 첫 포트폴리오 페이지를 소개합니다. 제 포트폴리오 페이지는 집중적으로 개발한 것이 아니라서 생각보다 오랜 시간이 걸렸지만, 조금씩 차근차근 작업해나가는 재미가 있었습니다.",
      created: new Date("2021/11/19").valueOf(),
    },
    {
      title: "Portfolio Page의 시작",
      desc: "제 첫 포트폴리오 페이지를 소개합니다. 제 포트폴리오 페이지는 집중적으로 개발한 것이 아니라서 생각보다 오랜 시간이 걸렸지만, 조금씩 차근차근 작업해나가는 재미가 있었습니다.",
      created: new Date("2021/11/19").valueOf(),
    },
    {
      title: "Portfolio Page의 시작",
      desc: "제 첫 포트폴리오 페이지를 소개합니다. 제 포트폴리오 페이지는 집중적으로 개발한 것이 아니라서 생각보다 오랜 시간이 걸렸지만, 조금씩 차근차근 작업해나가는 재미가 있었습니다.",
      created: new Date("2021/11/19").valueOf(),
    },
    {
      title: "Portfolio Page의 시작",
      desc: "제 첫 포트폴리오 페이지를 소개합니다. 제 포트폴리오 페이지는 집중적으로 개발한 것이 아니라서 생각보다 오랜 시간이 걸렸지만, 조금씩 차근차근 작업해나가는 재미가 있었습니다.",
      created: new Date("2021/11/19").valueOf(),
    },
    {
      title: "Portfolio Page의 시작",
      desc: "제 첫 포트폴리오 페이지를 소개합니다. 제 포트폴리오 페이지는 집중적으로 개발한 것이 아니라서 생각보다 오랜 시간이 걸렸지만, 조금씩 차근차근 작업해나가는 재미가 있었습니다.",
      created: new Date("2021/11/19").valueOf(),
    }
  ]

  return (
    <>
      <StyledShortcut>
        <div>
          최신글
        </div>
        <div>
          인기글
        </div>
      </StyledShortcut>
      <StyledCardBoard>
        <Card list={cardList} />
      </StyledCardBoard>
    </>
  )
}

export { MainPage }