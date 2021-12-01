import {
  selector,
  useSetRecoilState
} from "recoil";
import {
  CardListParams
} from './_recoilState';
import {
  toggleParams,
  categoriesState,
  navigationCategory
} from "./_recoilState";

// If toggleParams[0]`s isSelected === true, arrange card list to latest.
// If toggleParams[1]`s isSelected === true, arrange rate.
export const orderedState = selector<any>({
  key: "orderedState",
  get: ({ get }) => {
    const params = get(toggleParams);
    const cardList = get(CardListParams);
    const rawArray = [...cardList];

    if (params[0].isSelected === true) {
      return rawArray.sort((a, b) => { return a.created - b.created });
    }
    if (params[1].isSelected === true) {
      return rawArray.sort((a, b) => a.rate - b.rate);
    }
  }
});

export const subcategoryState = selector<any>({
  key: "subcategoryState",
  get: ({ get }) => {
    const categories = get(categoriesState);
    const navCategory = get(navigationCategory);
    const newArr = categories.filter((el: any) => navCategory === el.category);
    return newArr;
  }
})