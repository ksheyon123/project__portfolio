import React from "react";
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
    <>
    </>
  )
}

export { MainPage }