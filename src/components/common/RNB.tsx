import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import {
  navList
} from "../../constants/_navigations";
import {
  NavProps
} from "../../constants/_types";

const StyledRNB = styled.aside`
width : 140px;
  & div {
    border : 1px solid #8af398;
    box-shadow: 0px 3px 15px 0px rgba(172, 233, 181, 0.1);
    background-color : #FFF;
    border-radius : 6px;
    padding : 15px;
    & > ul {
      list-style: none;
      margin : 0;
      padding : 0;
      & li {
        margin-bottom : 10px;
        color : rgb(135, 135, 135);
        &:last-of-type {
          margin-bottom : 0px;
        }
      }
      & li.active{
          color : rgb(34, 34, 34);
        }
    }
  }
  @media screen and (max-width : 640px) {
    display : none;
  }
`;

const RNB: React.FC = () => {
  const history = useHistory();
  const _pathname = window.location.pathname;

  console.log(_pathname);
  return (
    <StyledRNB>
      <div>
        <ul>
          {
            navList.sort((a, b) => a.order - b.order).map((el) => {
              const {
                name,
                route
              } = el;
              return (
                <li className={_pathname === route ? 'active' : ""}>
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