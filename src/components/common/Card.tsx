import React from "react";
import styled from "styled-components";
import { CardType } from 'src/constants/types';
interface IProps {
  item: CardType;
}

const StyledCard = styled.div`
  width : 100%;
  border-radius : 8px;
  border : 1px solid #AAA;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  & > div.content-area {
    display : flex;
    border-bottom: 1px solid #AAA;
    & > div.img-area {
      display : flex;
      justify-content:center ;
      align-items: center;
      width : 140px;
      height : 140px;
      border-radius : 8px;
      overflow : hidden;
      padding :10px;
      & > img {
        width: auto;
          height: auto;
          max-width : 120px;
          max-height : 120px; 
          aspect-ratio: auto;
        border-radius: 8px;
        box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.08);
      }
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
        margin-bottom : 20px;
        padding :10px;
        & > img {
          width: auto;
          height: auto;
          max-width : 540px;
          max-height : 240px; 
          aspect-ratio: auto;
          border-radius: 8px;
          box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.08);
        }
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
  @media screen and (max-width : 420px) {
    & > div.content-area {
      display: flex;
      flex-direction: column;
      padding : 15px;
      & > div.img-area {
        width : 100%;
        height : 240px;
        margin-bottom : 20px;
        padding :10px;

        & > img {
          width: auto;
          height: auto;
          max-width : 540px;
          max-height : 240px; 
          aspect-ratio: auto;
          border-radius: 8px;
          box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.08);
        }
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

const Card: React.FC<IProps> = ({ item }) => {

  const {
    icon,
    title,
    thumb,
    tags,
    desc,
    st,
    en
  } = item;

  return (
    <StyledCard>
      <div className="content-area">
        <div className="img-area">
          <img src={thumb} alt="thumb" />
        </div>
        <div className="header-area"></div>
        <div className="desc-area">
          <div className="title-txt">
            <span>{title}</span>
          </div>
          {!!tags && (
            <div className="tags">
              {
                tags.map((el) => {
                  return (
                    <div>
                      {el}
                    </div>
                  )
                })
              }
            </div>
          )}
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
    </StyledCard >
  )
}

export { Card }