import React from "react";
import styled from "styled-components";
import { MainLayout, Header, Wrapper, RightWing, RNB } from "./common";
import theme from "../styles/theme";

const HeaderTitle = styled.div`
    font-size : "16px";
    color : #FFF;
  margin-left : 14px;
`
const Logo = styled.img`
  width : 45px;
  height : 45px;
  background-color: #FFF;
`;

const MainContainer: React.FC = ({ children }) => {
  return (
    <>
      <Header theme={theme}>
        <Logo />
        <HeaderTitle>
          My Side Rendering
        </HeaderTitle>
      </Header>
      <MainLayout theme={theme}>
        <Wrapper width={"70%"}>
          {children}
        </Wrapper>
        <RightWing>
          <RNB>
            <p>
              Main
          </p>
          </RNB>
        </RightWing>
      </MainLayout>
    </>
  )
}

export { MainContainer };
