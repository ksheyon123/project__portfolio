import {
  atom,

} from 'recoil';

export const pageTransition = atom<boolean>({
  key: "globalState__pageTransition",
  default: false,
})