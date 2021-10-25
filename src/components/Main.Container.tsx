import React from "react";
import { MainLayout, Header } from "./common";
import styled from "styled-components";


const HeaderTitle = styled.div`
    font-size : "16px";
    color : #FFF;
  margin-left : 14px;
`
const Logo = styled.img`
  width : 45px;
  height : 45px;
  background-color: #FFF;
`

const MainContainer: React.FC = ({ children }) => {


  return (
    <>

      <Header>
        <Logo />
        <HeaderTitle>
          My Side Rendering
        </HeaderTitle>
      </Header>
      <MainLayout>
        {children}
      </MainLayout>
    </>
  )
}

export { MainContainer };
