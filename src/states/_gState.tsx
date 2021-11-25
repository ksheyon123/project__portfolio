import {
  atom,
} from 'recoil';
import {
  categoryFilter
} from "../constants/index";

export const pageTransition = atom<boolean>({
  key: "globalState__pageTransition",
  default: false,
})

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