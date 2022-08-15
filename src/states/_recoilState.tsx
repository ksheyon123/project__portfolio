import {
  atom,
} from 'recoil';
import {
  ShortcutProps,
} from "./_types";

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


export const contentState = atom<any>({
  key: "contentState",
  default: {}
})
