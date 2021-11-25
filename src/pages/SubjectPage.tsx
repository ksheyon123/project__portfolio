import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import {
  navList
} from "../constants/navData";
import { ListView } from "../components/common/ListView";
import { categoryFilter } from "../constants/index";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  subcategoryState
} from "../states/_gSelector";
import { navigationCategory } from "../states/_gState";

const SubjectPage: React.FC = () => {
  const { pathname } = useLocation();

  const filter = useRecoilValue(subcategoryState);
  const setNavCategory = useSetRecoilState(navigationCategory)

  useEffect(() => {
    const num = navList.find((el: any) => el.route === pathname)?.category;
    setNavCategory(num!)
  }, [pathname]);

  return (
    <>
      <ListView list={filter} isSubject={true} />
    </>
  )
}

export { SubjectPage };