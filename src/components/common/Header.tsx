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
    justify-content: flex-end;
    align-items: center;
    width : 1200px;
    height : 100%;
    margin : 0 auto;
    padding : 0px 20px;
    & > div.menu-area {
      display: none;
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
      position : relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width :800px;
      margin : 0 auto;
      & > div.menu-area {
        display: flex;
        justify-content: center;
        & > img {
          width : 32px;
          height : 32px;
          cursor: pointer;
        }
      }
      & > div.link-area {
        position: absolute;
        left : 0px;
        top : 60px;
        & > ul {
          display: flex;
          flex-direction: column;
          list-style: none;
          padding : 0px;
          margin : 0px;
          width : 300px;
          & > li {
            padding : 20px;
            cursor: pointer;
          }
        }
      }
    }
  }
  @media screen and (max-width : 800px) {
    & > div.container {
      position : relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width :420px;
      margin : 0 auto;
      & > div.menu-area {
        display: flex;
        justify-content: center;
        & > img {
          width : 32px;
          height : 32px;
          cursor: pointer;
        }
      }
      & > div.link-area {
        position: absolute;
        left : 0px;
        top : 60px;
        & > ul {
          display: flex;
          flex-direction: column;
          list-style: none;
          padding : 0px;
          margin : 0px;
          width : 300px;
          & > li {
            padding : 20px;
            cursor: pointer;
          }
        }
      }
    }
  }

  @media screen and (max-width : 420px) {
    & > div.container {
      position : relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width :375px;
      margin : 0 auto;
      & > div.menu-area {
        display: flex;
        justify-content: center;
        & > img {
          width : 32px;
          height : 32px;
          cursor: pointer;
        }
      }
      & > div.link-area {
        position: absolute;
        left : 0px;
        top : 60px;
        & > ul {
          display: flex;
          flex-direction: column;
          list-style: none;
          padding : 0px;
          margin : 0px;
          width : 300px;
          & > li {
            padding : 20px;
            cursor: pointer;
          }
        }
      }
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