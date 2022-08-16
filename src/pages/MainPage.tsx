import React from "react";
import styled from "styled-components";
import {
  useRecoilValue
} from "recoil";
import { items } from "src/constants/items";
import { Card } from "src/components/index";


const StyledPage = styled.div`
  padding : 10px;
  & > div {
    margin-bottom : 20px;
    &:last-of-type {
      margin-bottom : 0px;
    }
  }
`;

const MainPage: React.FC = () => {

  return (
    <StyledPage>
      {items.map((el) => {
        return (
          <Card
            item={el}
          />
        )
      })}
    </StyledPage>
  )
}

export { MainPage }