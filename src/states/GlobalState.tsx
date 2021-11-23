import {
  atom,
} from 'recoil';

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