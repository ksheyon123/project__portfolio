import React from "react";
import {
  useHistory,
  useLocation,
  Link
} from "react-router-dom";
import {
  Column
} from './Column'
import styled from "styled-components";

const StyledList = styled.div`
  width : 800px;
  padding : 15px 15px;
  box-sizing: border-box;
  & div.box {
    border-radius: 3px;
    border : 1px solid #8af398;
    width : 100%;
    height : 100px;
    margin-bottom:10px ;
  }
  & > div:last-of-type {
    margin-bottom: 0px;
  }
`

const List: React.FC = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  const list = [
    {
      title: 'Hello World',
      itemId: "item__1"
    },
    {
      title: 'Hello World2',
      itemId: "item__2"
    }
  ]

  return (
    <Column>
      <StyledList>
        {
          list.map((el, idx) => {
            return (
              <div
                key={idx.toString()}
                className="box"
                onClick={() => history.push(`${pathname}/${el.itemId}`)}
              >
                {el.title}
              </div>
            )
          })
        }
      </StyledList>
    </Column>
  )
}

export { List }