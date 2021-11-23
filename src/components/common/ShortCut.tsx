import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const StyledShortCut = styled.div`
  display : flex;
  padding : 10px 20px;
  & div {
    color : ${theme.mono6};
    margin-right : 10px;
    &:last-of-type {
    margin-right : 0px;
    }
  }
  & img {
    width : 40px;
    height : 40px;
    border:1px solid #EBEBEB ;
  } 
  
`;
interface Props {
  list: {
    name: string;
    img?: any;
  }[]
}

const ShortCut: React.FC<Props> = (props) => {
  const {
    list
  } = props;
  return (
    <StyledShortCut>
      {
        list.map(el => {
          const {
            img,
            name
          } = el;
          return (
            <>
              {
                !!img && (
                  <img src={img} alt={name} />
                )
              }
              <div>
                {name}
              </div>
            </>
          )
        })
      }
    </StyledShortCut>
  )
}

export { ShortCut };