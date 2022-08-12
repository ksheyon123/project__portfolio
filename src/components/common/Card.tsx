import React from "react";
import styled from "styled-components";

interface IProps {
  icon?: string;
}

const StyledCard = styled.div`
  display: flex;
  width : 100%;
  height : 120px;
  border-radius : 8px;
  border : 1px solid #AAA;
  cursor: pointer;
  & > div.img-area {
    width : 120px;
    height : 120px;
    border-radius : 8px;
    border : 1px solid #AAA;
    margin-right : 15px;
  }
  & > div.content-area {
    & > div.title-txt {
      margin-bottom : 20px;
    }
    & > div.tags {
      & > span {
        padding : 5px 10px;
        background-color : #AAA;
        border-radius: 5px;
        color : #FFF;
        margin-right : 5px;
        &:last-of-type {
          margin-right : 0px;
        }
      }
    }
  }
`;

const Card: React.FC<IProps> = (props) => {

  const {

  } = props;

  return (
    <StyledCard>
      <div className="img-area" />
      <div className="content-area">
        <div className="title-txt">
          Title
        </div>
        <div className="tags">
          <span>React</span>
          <span>Webpack</span>
          <span>Electron</span>
        </div>
      </div>
    </StyledCard>
  )
}

export { Card }