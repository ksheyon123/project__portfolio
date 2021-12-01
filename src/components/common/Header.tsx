import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import {
  navList
} from "../../constants/_navigations";
import {
  NavProps
} from "../../constants/_types";
import {
  searchKeywordState
} from "../../states/_recoilState";

const StyledHeader = styled.header`
  position : fixed;
  top : 0;
  width : 100vw;
  border-bottom: 1px solid #eee;
  z-index: 100;
  background-color: ${props => props.theme.mono1};
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 5%);
  & div {
    position: relative;
    display: flex;
    align-items: center;
    padding : 10px 20px;
  }
  & > div > div {
    font-size : 16px;
    color : rgb(34, 34, 34);
    margin-left : 14px;
  }
  & > div > img {
    width : 45px;
    height : 45px;
    background-color: #FFF;
  }
  & > div > div:last-of-type {
    position : absolute;
    right : 20px;
    
    &::before {
        content : "-";
        font-size: 20px;
        color : red;
      }
    & ul {
      list-style: none;
      padding :0;
      margin : 0;
      
    }
    & input {
      width : 150px;
      border-radius: 20px;
      padding : 10px 0px 10px 30px;
      border : 1px solid #BEB;
      margin-right : 10px;
      
    }
  }
`;

const Header: React.FC = () => {
  const [searchKeyword, setSearchKeyword] = useRecoilState(searchKeywordState);
  return (
    <StyledHeader>
      <div>
        <img />
        <div>
          My Side Rendering
        </div>
        <div>
          <input
            placeholder="Search"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <ul>
            {
              navList.sort((a, b) => a.order - b.order).map((el: NavProps) => {
                const {
                  name
                } = el;
                return (
                  <li>
                    <nav>{name}</nav>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </StyledHeader>
  )
}

export { Header };