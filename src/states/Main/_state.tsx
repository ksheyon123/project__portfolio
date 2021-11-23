import {
  atom,
} from 'recoil';
import { CardProps } from "./_types";

export const CardListParams = atom<CardProps[]>({
  key: "mainPage__cardListParams",
  default: [
    {
      title: "Portfolio Page의 시작",
      desc: "제 첫 포트폴리오 페이지를 소개합니다. 제 포트폴리오 페이지는 집중적으로 개발한 것이 아니라서 생각보다 오랜 시간이 걸렸지만, 조금씩 차근차근 작업해나가는 재미가 있었습니다.",
      created: new Date("2021/11/19").valueOf(),
      rate: 10,
    },
    {
      title: "Portfolio Page의 시작",
      desc: "제 첫 포트폴리오 페이지를 소개합니다. 제 포트폴리오 페이지는 집중적으로 개발한 것이 아니라서 생각보다 오랜 시간이 걸렸지만, 조금씩 차근차근 작업해나가는 재미가 있었습니다.",
      created: new Date("2021/11/15").valueOf(),
      rate: 0,
    },
    {
      title: "Portfolio Page의 시작",
      desc: "제 첫 포트폴리오 페이지를 소개합니다. 제 포트폴리오 페이지는 집중적으로 개발한 것이 아니라서 생각보다 오랜 시간이 걸렸지만, 조금씩 차근차근 작업해나가는 재미가 있었습니다.",
      created: new Date("2021/11/11").valueOf(),
      rate: 120,
    },
    {
      title: "Portfolio Page의 시작",
      desc: "제 첫 포트폴리오 페이지를 소개합니다. 제 포트폴리오 페이지는 집중적으로 개발한 것이 아니라서 생각보다 오랜 시간이 걸렸지만, 조금씩 차근차근 작업해나가는 재미가 있었습니다.",
      created: new Date("2021/11/10").valueOf(),
      rate: 7,
    },
    {
      title: "Portfolio Page의 시작",
      desc: "제 첫 포트폴리오 페이지를 소개합니다. 제 포트폴리오 페이지는 집중적으로 개발한 것이 아니라서 생각보다 오랜 시간이 걸렸지만, 조금씩 차근차근 작업해나가는 재미가 있었습니다.",
      created: new Date("2021/11/09").valueOf(),
      rate: 83,
    },
    {
      title: "Portfolio Page의 시작",
      desc: "제 첫 포트폴리오 페이지를 소개합니다. 제 포트폴리오 페이지는 집중적으로 개발한 것이 아니라서 생각보다 오랜 시간이 걸렸지만, 조금씩 차근차근 작업해나가는 재미가 있었습니다.",
      created: new Date("2021/11/06").valueOf(),
      rate: 62,
    },
    {
      title: "Portfolio Page의 시작",
      desc: "제 첫 포트폴리오 페이지를 소개합니다. 제 포트폴리오 페이지는 집중적으로 개발한 것이 아니라서 생각보다 오랜 시간이 걸렸지만, 조금씩 차근차근 작업해나가는 재미가 있었습니다.",
      created: new Date("2021/11/01").valueOf(),
      rate: 111,
    }
  ]
})