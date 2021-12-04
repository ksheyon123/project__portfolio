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

const contentArr = [
  {
    _fKey: "rc",
    _pKey: "hooks",
    title: "React Hooks에 대하여",
    introduction: "이번 페이지에서는 React Hooks과 사용법에 대해서 알아보겠습니다.",
    keyword: ["React", "Javascript"],
    created: new Date("2021/12/06 17:13").valueOf(),
    rated: 0,
    writer: ["KangSeohyeon"],
    desc: `
      <h1></h1>
    `
  },
  {
    _fKey: "rc",
    _pKey: "hoc",
    title: "HOC (High Order Component)",
    introduction: "이번 페이지에서는 React의 HOC 사용법에 대해서 알아보겠습니다.",
    keyword: ["React"],
    created: new Date("2021/12/07 11:02").valueOf(),
    rated: 0,
    writer: ["KangSeohyeon"],
    desc: `
      <h1></h1>
    `
  },
  {
    _fKey: "vjs",
    _pKey: "es6__1",
    title: "ES5 & Arrow Function",
    introduction: "이번 페이지에서는 JS의 Arrow Function의 특징에 대해서 알아보겠습니다.",
    keyword: ["React"],
    created: new Date("2021/12/07 17:38").valueOf(),
    rated: 0,
    writer: ["KangSeohyeon"],
    desc: `
      <h1></h1>
    `
  },
  {
    _fKey: "main",
    _pKey: "etc",
    title: "이 페이지에 대하여",
    introduction: "이 웹 서비스는 첫 Portfolio Web Page입니다.",
    keyword: ["About"],
    created: new Date("2021/12/05 00:15").valueOf(),
    rated: 0,
    writer: ["KangSeohyeon"],
    desc: `
      <h1></h1>
    `
  },
]

export {
  cardArr,
  toggleArr,
  contentArr
}