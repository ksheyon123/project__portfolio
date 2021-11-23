import React, { useState } from "react";
import styled from "styled-components";
import {
  useHistory
} from "react-router-dom";

interface Props {
  list: {
    id: number | string;
    name: string;
    link: string
  }[];
  width?: number;
  isVertical?: boolean;
  isSubject?: boolean;
}

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

const ListView: React.FC<Props> = (props) => {
  const {
    list,
  } = props;
  const [curIdx, setCurIdx] = useState<number>(0);

  return (
    <View>
      {
        list.map((el, idx) => {
          return (
            <div
              className={idx === curIdx ? "item active" : "item"}
              onClick={() => setCurIdx(idx)}
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

export { ListView };