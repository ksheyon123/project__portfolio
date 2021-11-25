import {
  selector,
  useSetRecoilState
} from "recoil";
import {
  CardListParams
} from './Main/_state';
import {
  toggleParams
} from "./GlobalState";

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