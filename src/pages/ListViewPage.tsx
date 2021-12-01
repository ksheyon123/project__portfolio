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
  subcategoryState
} from "../states/_recoilSelector";
import { navigationCategory } from "../states/_recoilState";

const ListViewPage: React.FC = () => {
  const { pathname } = useLocation();

  const filter = useRecoilValue(subcategoryState);
  const setNavCategory = useSetRecoilState(navigationCategory)

  useEffect(() => {
    const num = navList.find((el: any) => el.route === pathname)?.category;
    console.log("num", num)
    setNavCategory(num!)
  }, [pathname]);

  return (
    <Column>
      <CategorySelector list={filter} />
      <List />
    </Column>
  )
}

export { ListViewPage };