import React, { useState } from "react";
import styled from "styled-components";
import { ShortCut } from "../components/common/ShortCut";
import { CardBoard } from "../components/common/CardBoard";
import {
  useRecoilValue
} from "recoil";
import {
  toggleParams
} from "../states/_gState";
import {
  orderedState
} from "../states/_gSelector";
import {
  CardListParams
} from "../states/Main/_state";

const MainPage: React.FC = () => {
  const list = useRecoilValue(toggleParams);
  const cardList = useRecoilValue(orderedState);

  return (
    <>
      <ShortCut list={list} />
      <CardBoard list={cardList} />
    </>
  )
}

export { MainPage }