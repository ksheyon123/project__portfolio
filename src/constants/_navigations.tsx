import { ROUTES } from "./index";

export const navList = [
  {
    order: 0,
    key: "main",
    name: 'Main',
    route: ROUTES.MAIN,
    _pkey: 1,
  },
  {
    order: 1,
    key: "js",
    name: "Javascript",
    route: ROUTES.JAVASCRIPT,
    _pkey: 2,
  },
  {
    order: 2,
    key: "bc",
    name: "Blockchain",
    route: ROUTES.BLOCKCHAIN,
    _pkey: 3,
  },
  {
    order: 3,
    key: "bc",
    name: "#About__Page",
    route: ROUTES.ABOUT,
    _pkey: 999,
  },
];

export const categoryFilter = [
  {
    id: 1,
    name: "React",
    _pKey: "rc",
    _fKey: 2,
  },
  {
    id: 2,
    name: "VanillaJS",
    _pKey: "vjs",
    _fKey: 2,

  },
  {
    id: 2,
    name: "Hyperledger",
    _pKey: "hldr",
    _fKey: 3,
  },
];