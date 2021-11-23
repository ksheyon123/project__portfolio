import React, { useState } from "react";
import styled from "styled-components";
import { ShortCut } from "../components/common/ShortCut";
import { CardBoard } from "../components/common/CardBoard";
import {
  useRecoilValue
} from "recoil";
import {
  toggleParams
} from "../states/GlobalState";
import {
  CardListParams
} from "../states/Main/_state";

const MainPage: React.FC = () => {
  const list = useRecoilValue(toggleParams);
  const cardList = useRecoilValue(CardListParams);

  return (
    <>
      <ShortCut list={list} />
      <CardBoard list={cardList} />
    </>
  )
}

export { MainPage }