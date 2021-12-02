import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import {
  navList
} from "../constants/_navigations";
import {
  CategorySelector,
  Column,
  List,
} from "../components/index";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  subcategoryFilter,
  itemFilter
} from "../states/_recoilSelector";
import {
  navigationCategory,
  itemKeyState
} from "../states/_recoilState";

const ListViewPage: React.FC = () => {
  const { pathname } = useLocation();

  const filter = useRecoilValue(subcategoryFilter);
  console.log(filter)
  const items = useRecoilValue(itemFilter)
  const setNavCategory = useSetRecoilState(navigationCategory);
  const setItemKey = useSetRecoilState(itemKeyState);
  useEffect(() => {
    const num = navList.find((el: any) => el.route === pathname)?._pkey;
    setNavCategory(num!)
  }, [pathname]);

  return (
    <Column>
      <CategorySelector list={filter} setKey={setItemKey} />
      <List list={items} />
    </Column>
  )
}

export { ListViewPage };