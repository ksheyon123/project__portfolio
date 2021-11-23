import React from "react";
import styled from "styled-components";
import { RNB } from "./RNB";

const StyledMainLayout = styled.main`
display: flex;
justify-content: center;
width : 100vw;
padding : 75px 15px 0px;
overflow: scroll;
box-sizing : border-box;
font-family: ${props => props.theme.font};
`

const StyledWrapper = styled.div<{ color?: string; }>`
margin : 0px 20px;
background-color : ${props => !!props.color ? props.color : "rgb(248, 249, 250)"};
@media screen and (min-width :1440px) {
  width : 70%;
}
`;


const MainLayout: React.FC = ({ children }) => {
  return (
    <StyledMainLayout>
      <StyledWrapper>
        {children}
      </StyledWrapper>
      <RNB />
    </StyledMainLayout>
  )
}

export { MainLayout };