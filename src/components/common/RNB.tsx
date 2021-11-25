import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import {
  navList
} from "../../constants/navData";
import {
  NavProps
} from "../../constants/_types";

const StyledRNB = styled.aside`
  width : 15rem;
  & div {
    width : 100%;
    border : 1px solid #EBEBEB;
    background-color : #FFF;
    border-radius : 6px;
    padding : 15px;
    & > ul {
      list-style: none;
      margin : 0;
      padding : 0;
      & li {
        margin-bottom : 10px;
        &:last-of-type {
          margin-bottom : 0px;
        }
      }
    }
  }
`;

const RNB: React.FC = () => {
  const history = useHistory();
  const rawList = [...navList];

  return (
    <StyledRNB>
      <div>
        <ul>
          {
            navList.sort((a, b) => a.order - b.order).map((el: NavProps) => {
              const {
                name,
                route
              } = el;
              return (
                <li>
                  <nav onClick={() => history.push(route)}>{name}</nav>
                </li>
              )
            })
          }
        </ul>
      </div>
    </StyledRNB>
  )
}

export { RNB };