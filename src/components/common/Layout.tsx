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
  }
  // 960px
  @media screen and (max-width : 960px) {
    & > div.container {
      width : 960px;
      height: 100%;
      margin : 0 auto;
    }
  }
  // 375px
  @media screen and (max-width : 375px) {
    & > div.container {
      width : 375px;
      height: 100%;
      margin : 0 auto;
    }
  }
`;

const Layout: React.FC = () => {
  return (
    <StyledPage>
      <div className="container">

      </div>
    </StyledPage>
  )
}

export {
  Layout
}