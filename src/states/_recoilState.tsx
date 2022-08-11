import {
  atom,
} from 'recoil';
import {
  ShortcutProps,
  CategoryProps
} from "./_types";
import {
  toggleArr,
  contentArr
} from "../constants/dummies";

export const toggleState = atom<ShortcutProps[]>({
  key: "globalState__toggleState",
  default: toggleArr
});

export const navigationCategory = atom<number>({
  key: "globalState__navigationCategory",
  default: 2
});

export const searchKeywordState = atom<string>({
  key: "globalState__searchKeywordState",
  default: "",
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
