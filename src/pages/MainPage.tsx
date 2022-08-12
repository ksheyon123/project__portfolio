import React from "react";
import styled from "styled-components";
import {
  useRecoilValue
} from "recoil";
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
      <Card />
      <Card />
      <Card />
    </StyledPage>
  )
}

export { MainPage }