import {
  atom,
} from 'recoil';
import {
  categoryFilter
} from "../constants/_navigations";
import {
  CardProps
} from "./_types";

export const CardListParams = atom<CardProps[]>({
  key: "mainPage__cardListParams",
  default: [
    {
      title: "Portfolio Page의 시작",
      desc: "제 첫 포트폴리오 페이지를 소개합니다. 제 포트폴리오 페이지는 집중적으로 개발한 것이 아니라서 생각보다 오랜 시간이 걸렸지만, 조금씩 차근차근 작업해나가는 재미가 있었습니다.",
      created: new Date("2021/11/19").valueOf(),
      rate: 10,
    },
  ]
});

export const toggleParams = atom<any[]>({
  key: "globalState__toggleParams",
  default: [
    {
      name: "최신글",
      isSelected: true,
    },
    {
      name: "인기글",
      isSelected: false,
    }
  ]
});

export const navigationCategory = atom<number>({
  key: "globalState__navigationCategory",
  default: 2
});

export const categoriesState = atom({
  key: "globalState__categoriesState",
  default: categoryFilter
});

export const searchKeywordState = atom<string>({
  key: "globalState__searchKeywordState",
  default: "",
})