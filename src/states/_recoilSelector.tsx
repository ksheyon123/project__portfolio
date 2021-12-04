import {
  selector,
} from "recoil";

import {
} from './_recoilState';
import {
  toggleState,
  categoryArrState,
  navigationCategory,
  contentArrState,
  itemKeyState,
  contentState
} from "./_recoilState";
import {
  ascendingOrder
} from "../utils/index";


// If toggleParams[0]`s isSelected === true, arrange card list to latest.
// If toggleParams[1]`s isSelected === true, arrange rate.
export const orderedState = selector<any>({
  key: "orderedState",
  get: ({ get }) => {
    const params = get(toggleState);
    const cardList = get(contentArrState);
    const rawArray = [...cardList];

    if (params[0].isSelected === true) {
      return ascendingOrder(rawArray, "created")
    }
    if (params[1].isSelected === true) {
      return ascendingOrder(rawArray, "rate")
    }
  }
});

export const subcategoryFilter = selector<any>({
  key: "subcategoryFilter",
  get: ({ get }) => {
    const categorArr = get(categoryArrState);
    const navCategory = get(navigationCategory);
    const newArr = categorArr.filter((el: any) => navCategory === el._fKey);
    return newArr;
  }
})

export const itemFilter = selector<any>({
  key: "itemFilter",
  get: ({ get }) => {
    const items = get(contentArrState);
    const key = get(itemKeyState);
    console.log("items", items);
    console.log("key", key);

    const newArr = items.filter((el) => el._fKey === key);
    return newArr;
  }
});

export const contentFilter = selector<any>({
  key: "contentFilter",
  get: ({ get }) => {
    return get(contentState);
  },
  set: ({ set, get }, newValue) => {
    const contentArr = get(contentArrState);
    const filteredContent = contentArr.find((el) => el._pKey === newValue);
    set(contentState, filteredContent);
  }
})