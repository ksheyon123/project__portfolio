import {
  selector,
} from "recoil";

import {
} from './_recoilState';
import {
  cardArrState,
  toggleState,
  categoryArrState,
  navigationCategory,
  itmeArrState,
  itemKeyState
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
    const cardList = get(cardArrState);
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
    const items = get(itmeArrState);
    const key = get(itemKeyState);
    console.log("items", items);
    console.log("key", key);

    const newArr = items.filter((el) => el._fKey === key);
    return newArr;
  }
})