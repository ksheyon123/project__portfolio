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
export const toggleSelector = selector<any>({
  key: "toggleSelector",
  get: ({ get }) => {
    get(toggleParams);
  },
  set: ({ get, set }, newValue) => {
    const a = get(toggleParams);
    console.log("a", a);
    a.map((el) => {
      if (el.isSelected)
        return {
          ...el,

        }
    })
  }
})