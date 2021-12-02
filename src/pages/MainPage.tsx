import React from "react";
import {
  ShortCut,
  CardBoard,
  Column,
} from "../components/index";
import {
  useRecoilValue
} from "recoil";
import {
  toggleState
} from "../states/_recoilState";
import {
  orderedState
} from "../states/_recoilSelector";


const MainPage: React.FC = () => {
  const list = useRecoilValue(toggleState);
  const cardList = useRecoilValue(orderedState);

  return (
    <Column>
      <ShortCut list={list} />
      <CardBoard list={cardList} />
    </Column>

  )
}

export { MainPage }