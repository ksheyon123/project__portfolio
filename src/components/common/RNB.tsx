import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
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
  return (
    <StyledRNB>
      <div>
        <ul>
          <li>
            <nav onClick={() => history.push("/")}>Main</nav>
          </li>
          <li>
            <nav onClick={() => history.push("/subject")}>Subject</nav>
          </li>
        </ul>
      </div>
    </StyledRNB>
  )
}

export { RNB };