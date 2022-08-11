import React from "react";
import styled from "styled-components";
import ic_menu from "src/assets/01-icon-24-px-menu@2x.png";

const StyledHeader = styled.div`
  position : fixed;
  width : 100vw;
  height : 60px;
  border-bottom : 1px solid #AAA;
  & > div.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width : 1200px;
    height : 100%;
    padding : 0px 15px;
    margin : 0 auto;
    & > div.menu-area {
      display: flex;
      justify-content: center;
      & > img {
        width : 32px;
        height : 32px;
      }
    }
    & > div.link-area {
      & > ul {
        display: flex;
        list-style: none;
        padding : 0px;
        margin : 0px;
        & > li {
          margin-right : 10px;
          cursor: pointer;
          &:last-of-type {
            margin-right : 0px;
          }
        }
      }
    }
  }
  @media screen and (max-width : 1200px) {
    & > div.container {
      display: flex;
      justify-content: space-between;
      width :800px;
      margin : 0 auto;
    }
  }
  @media screen and (max-width : 420px) {
    & > div.container {
      display: flex;
      justify-content: space-between;
      width :375px;
      margin : 0 auto;
    }
  }
`;
const Header: React.FC = () => {

  return (
    <StyledHeader>
      <div className="container">
        <div className="menu-area">
          <img src={ic_menu} alt="menu" />
        </div>
        <div className="link-area">
          <ul>
            <li>
              Main
            </li>
            <li>
              Contact
            </li>
          </ul>
        </div>
      </div>
    </StyledHeader>
  )
}

export { Header };