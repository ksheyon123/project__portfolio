import React from "react";
import styled from "styled-components";
import { ShortCut } from "../components/common/ShortCut";
import { CardBoard } from "../components/common/CardBoard";
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
];

const MainPage: React.FC = () => {
  const list = [
    {
      name: "최신글",

    },
    {
      name: "인기글"
    }
  ]

  return (
    <>
      <ShortCut list={list} />
      <CardBoard list={cardList} />
    </>
  )
}

export { MainPage }