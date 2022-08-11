import React from "react";
import styled from "styled-components";
import {
  useRecoilValue
} from "recoil";


const StyledPage = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 380px);
  grid-column-gap: 10px;
  padding : 10px;
`;

const MainPage: React.FC = () => {

  return (
    <StyledPage>
      <div>
        a
      </div>
      <div>
        a
      </div>
      <div>
        a
      </div>
    </StyledPage>
  )
}

export { MainPage }