import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  position : fixed;
  top : 0;
  width : 100vw;
  height : 60px;
  border-bottom: 1px solid #eee;
  z-index: 100;
  background-color: ${props => props.theme.mono1};
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 5%);
  padding : 0px 20px;
  & > div {
    font-size : "16px";
    color : rgb(34, 34, 34);
    margin-left : 14px;
  }
  & > img {
    width : 45px;
    height : 45px;
    background-color: #FFF;
  }
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <img />
      <div>
        My Side Rendering
      </div>
    </StyledHeader>
  )
}

export { Header };