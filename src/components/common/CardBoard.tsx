import React from "react";
import styled from 'styled-components';

const StyledCardBoard = styled.div`
  display: grid;
  box-sizing :border-box;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 20px;
  padding : 15px;
  @media screen and (max-width : 1080px) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    row-gap: 20px;
  }
  @media screen and (max-width : 800px) {
    grid-template-columns: repeat(1, 1fr);
    column-gap: 20px;
    row-gap: 20px;
  }
`;

const StyledCard = styled.div<{ bgColor: string; }>`
  border-radius: 5px;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.09);
  background-color : #FFF;
  & > div.banner {
    display: flex;
    border-top-left-radius : 5px;
    border-top-right-radius : 5px;
    background-color: ${props => props.bgColor};
    height : 150px;
    justify-content: center;
    align-items: center;
  }
  & > div.desc {
    height : 100px;
    padding : 15px;
    border-bottom: 1px solid rgb(235, 235, 235);
    overflow : hidden;
    text-overflow: ellipsis;
  }
  & > div.footer {
    height : 30px;
  }
`;

interface CardProps {
  title: string;
  img?: string;
  desc?: string;
  created: number;
}

const CardBoard: React.FC<{ list: CardProps[] }> = (props) => {
  const { list } = props;
  return (
    <StyledCardBoard>
      {
        list.map((el: CardProps, i: number) => {
          const {
            title,
            img,
            desc,
            created
          } = el;
          return (
            <StyledCard key={i.toString()} bgColor={"rgb(37, 77,187)"}>
              <div className="banner">
                {
                  !!img ?
                    (
                      <img src={img} alt={title} />
                    ) : (
                      title
                    )
                }
              </div>
              <div className="desc">
                {desc}
              </div>
              <div className="footer">
                {new Date(created).toISOString().substring(0, 10)}
              </div>
            </StyledCard>
          )
        })
      }
    </StyledCardBoard>
  )
}

export { CardBoard };