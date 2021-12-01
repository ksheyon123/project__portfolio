import { ROUTES } from "./index";
import {
  CategoryProps
} from "./_types";
export const navList = [
  {
    order: 0,
    key: "main",
    name: 'Main',
    route: ROUTES.MAIN,
    category: 1,
  },
  {
    order: 1,
    key: "js",
    name: "Javascript",
    route: ROUTES.JAVASCRIPT,
    category: 2,
  },
  {
    order: 2,
    key: "bc",
    name: "Blockchain",
    route: ROUTES.BLOCKCHAIN,
    category: 3,
  },
  {
    order: 3,
    key: "bc",
    name: "#About__Page",
    route: ROUTES.ABOUT,
    category: 999,
  },
];

export const categoryFilter: CategoryProps[] = [
  {
    id: 1,
    name: "React",
    category: 2,
  },
  {
    id: 2,
    name: "VanillaJS",
    category: 2,
  },
  {
    id: 2,
    name: "Hyperledger",
    category: 3,
  },
];