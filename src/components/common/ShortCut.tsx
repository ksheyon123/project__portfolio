import React, { useState } from "react";
import styled from "styled-components";
import {
  useSetRecoilState
} from "recoil";
import {
  toggleParams
} from "../../states/_gState";
import theme from "../../styles/theme";

const StyledShortCut = styled.div`
  display : flex;
  padding : 10px 20px;
  & div {
    color : ${theme.mono3Divider};
    margin-right : 10px;
    &:last-of-type {
    margin-right : 0px;
    }
    &.active {
      color : ${theme.mono6};
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
    isSelected: boolean;
  }[];
}

const ShortCut: React.FC<Props> = (props) => {
  const {
    list,
  } = props;
  const setList = useSetRecoilState(toggleParams);
  const toggleShortcut = (idx: number) => {
    const newList = list.map(el => {
      return {
        ...el,
        isSelected: false
      }
    });
    newList[idx].isSelected = true;
    setList(newList);
  }

  return (
    <StyledShortCut>
      {
        list.map((el: any, idx: number) => {
          const {
            img,
            name,
            isSelected
          } = el;
          return (
            <>
              {
                !!img && (
                  <img src={img} alt={name} />
                )
              }
              <div
                key={idx.toString()}
                className={isSelected && "active"}
                onClick={() => toggleShortcut(idx)}
              >
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