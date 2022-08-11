import React from "react";
import styled from 'styled-components';

const StyledPage = styled.div`
  // 1920px
  width : 100vw;
  height : 100vh;
  & > div.container {
    width : 1200px;
    height: 100%;
    margin : 0 auto;
    border : 1px solid #AAA;
    padding-top : 60px;
  }
  // 960px
  @media screen and (max-width : 1200px) {
    & > div.container {
      width : 800px;
      height: 100%;
      margin : 0 auto;
    }
  }
  // 375px
  @media screen and (max-width : 800px) {
    & > div.container {
      width : 420px;
      height: 100%;
      margin : 0 auto;
    }
  }
  @media screen and (max-width : 420px) {
    & > div.container {
      width : 375px;
      height: 100%;
      margin : 0 auto;
    }
  }
`;

const Layout: React.FC = ({ children }) => {
  return (
    <StyledPage>
      <div className="container">
        {children}
      </div>
    </StyledPage>
  )
}

export {
  Layout
}