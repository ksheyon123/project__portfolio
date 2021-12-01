import React from "react";
import {
  useLocation
} from "react-router-dom";
import styled from "styled-components";
import { RNB } from "./RNB";
import {
  ROUTES
} from "../../constants/index";
const StyledContainer = styled.main`
display: flex;
justify-content: center;
width : 100vw;
padding : 75px 0px 0px;
overflow: scroll;
box-sizing : border-box;
font-family: ${props => props.theme.font};
`

const StyledMainLayout = styled.div<{ color?: string; }>`
display : flex;
width : 940px;
background-color : ${props => !!props.color ? props.color : "rgb(248, 249, 250)"};
@media screen and (max-width :640) {
  width : 300px;
}
`;


const Container: React.FC = ({ children }) => {

  const { pathname } = useLocation();

  const _noRNB = pathname !== ROUTES.ABOUT;

  return (
    <StyledContainer>
      <StyledMainLayout>
        {children}
        {
          _noRNB && (
            <RNB />
          )
        }
      </StyledMainLayout>
    </StyledContainer>
  )
}

export { Container };