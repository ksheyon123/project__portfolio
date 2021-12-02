import {
  atom,
} from 'recoil';
import {
  categoryFilter
} from "../constants/_navigations";
import {
  ShortcutProps,
  CardProps,
  ItemProps,
  CategoryProps
} from "./_types";
import {
  cardArr,
  toggleArr,
  itemArr,
  contentArr
} from "../constants/dummies";


export const cardArrState = atom<CardProps[]>({
  key: "mainPage__cardListParams",
  default: cardArr
});

export const toggleState = atom<ShortcutProps[]>({
  key: "globalState__toggleState",
  default: toggleArr
});

export const navigationCategory = atom<number>({
  key: "globalState__navigationCategory",
  default: 2
});

export const categoryArrState = atom<CategoryProps[]>({
  key: "globalState__categoriesState",
  default: categoryFilter
});

export const searchKeywordState = atom<string>({
  key: "globalState__searchKeywordState",
  default: "",
});

export const itmeArrState = atom<ItemProps[]>({
  key: "itemListState",
  default: itemArr
});

export const itemKeyState = atom<string>({
  key: "itemKeyState",
  default: ""
});

export const contentArrState = atom<any[]>({
  key: 'contentArrState',
  default: contentArr,
});

export const contentState = atom<any>({
  key: "contentState",
  default: {}
})
