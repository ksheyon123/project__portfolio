import React, { useState } from "react";
import styled from "styled-components";
import {
  CategoryProps
} from "../../states/_types";

const View = styled.div`
  display: flex;
  & > div.item {
    border-radius: 10px;
    border : 1px solid #EBEBEB;
    padding : 5px 15px;
    margin-right : 10px;
    color : rgb(135, 135, 135);
  }
  & > div.active {
    color : rgb(34, 34, 34);
    border : 1px solid rgb(34, 34, 34);
  }
`

interface Props {
  list: CategoryProps[];
  width?: number;
  setKey: (e: any) => void;
}

const CategorySelector: React.FC<Props> = (props) => {
  const {
    list,
    setKey
  } = props;
  const [curIdx, setCurIdx] = useState<number>(0);

  return (
    <View>
      {
        list.map((el, idx) => {
          const {
            _pKey
          } = el;
          return (
            <div
              className={idx === curIdx ? "item active" : "item"}
              onClick={() => {
                setCurIdx(idx);
                setKey(_pKey)
              }}
              key={idx.toString()}
            >
              {
                el.name
              }
            </div>
          )
        })
      }
    </View>
  )
}

export { CategorySelector };