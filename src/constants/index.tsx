interface CategoryProps {
  id: number;
  name: string;
  category: number;
}

export const ROUTES = {
  MAIN: "/",
  JAVASCRIPT: "/js",
  BLOCKCHAIN: "/bc",
}

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