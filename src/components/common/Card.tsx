import React from "react";
import styled from "styled-components";

interface IProps {
  icon?: string;
}

const StyledCard = styled.div`
  width : 100%;
  border-radius : 8px;
  border : 1px solid #AAA;
  cursor: pointer;
  & > div.content-area {
    display : flex;
    border-bottom: 1px solid #AAA;
    & > div.img-area {
      width : 140px;
      height : 140px;
      border-radius : 8px;
      border : 1px solid #AAA;
    }
    & > div.desc-area {
      width : calc(100% - 120px);
      padding : 15px;
      & > div.title-txt {
        margin-bottom : 20px;
      }
      & > div.tags {
        display: flex;
        width : 100%;
        height : auto;
        margin-bottom : 20px;
        & > div {
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
      & > div.content-txt{
        padding : 5px 0px;
      } 
    }
  }
  & > div.footer-area {
    padding : 5px 10px;
    & > div.project-period {
      display: flex;
    }
  }
  @media screen and (max-width : 800px) {
    & > div.content-area {
      display: flex;
      flex-direction: column;
      padding : 15px;
      & > div.img-area {
        width : 100%;
        height : 240px;
      }
      & > div.desc-area {
        padding : 0px;
      }
    }
    & > div.footer-area {
      & > div.project-period {
      }
    }
  }
`;

const Card: React.FC<IProps> = (props) => {

  const {

  } = props;

  return (
    <StyledCard>
      <div className="content-area">
        <div className="img-area" />
        <div className="header-area"></div>
        <div className="desc-area">
          <div className="title-txt">
            Title
          </div>
          <div className="tags">
            <div>React</div>
            <div>Webpack</div>
            <div>Electron</div>
          </div>
          <div className="content-txt">
            Desc
          </div>
        </div>
      </div>
      <div className="footer-area">
        <div className="project-period">
          <div>
            <span>Start Date</span>
            <span>Start Date</span>
          </div>
          <div>
            <span>End Date</span>
            <span>End Date</span>
          </div>
        </div>
      </div>
    </StyledCard>
  )
}

export { Card }