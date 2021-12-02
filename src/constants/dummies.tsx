const cardArr = [
  {
    title: "Portfolio Page의 시작",
    desc: "제 첫 포트폴리오 페이지를 소개합니다. 제 포트폴리오 페이지는 집중적으로 개발한 것이 아니라서 생각보다 오랜 시간이 걸렸지만, 조금씩 차근차근 작업해나가는 재미가 있었습니다.",
    created: new Date("2021/11/19").valueOf(),
    rate: 10,
  },
  {
    title: "Portfolio Page의 시작",
    desc: "제 첫 포트폴리오 페이지를 소개합니다. 제 포트폴리오 페이지는 집중적으로 개발한 것이 아니라서 생각보다 오랜 시간이 걸렸지만, 조금씩 차근차근 작업해나가는 재미가 있었습니다.",
    created: new Date("2021/11/20").valueOf(),
    rate: 12,
  },
  {
    title: "Portfolio Page의 시작",
    desc: "제 첫 포트폴리오 페이지를 소개합니다. 제 포트폴리오 페이지는 집중적으로 개발한 것이 아니라서 생각보다 오랜 시간이 걸렸지만, 조금씩 차근차근 작업해나가는 재미가 있었습니다.",
    created: new Date("2021/11/15").valueOf(),
    rate: 13,
  },
  {
    title: "Portfolio Page의 시작",
    desc: "제 첫 포트폴리오 페이지를 소개합니다. 제 포트폴리오 페이지는 집중적으로 개발한 것이 아니라서 생각보다 오랜 시간이 걸렸지만, 조금씩 차근차근 작업해나가는 재미가 있었습니다.",
    created: new Date("2021/11/18").valueOf(),
    rate: 14,
  },
]

const toggleArr = [
  {
    name: "최신글",
    isSelected: true,
  },
  {
    name: "인기글",
    isSelected: false,
  }
];

const itemArr = [
  {
    title: "Hooks",
    _fKey: "rc",
  },
  {
    title: "HOC (High Order Component)",
    _fKey: "rc",
  },
];


export {
  cardArr,
  toggleArr,
  itemArr
}