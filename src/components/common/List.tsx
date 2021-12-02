import React from "react";
import {
  useHistory,
  useLocation,
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
`;

interface Props {
  list: any[];
}

const List: React.FC<Props> = (props: any) => {
  const {
    list
  } = props;

  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <Column>
      <StyledList>
        {
          list.map((el: any, idx: any) => {
            return (
              <div
                key={idx.toString()}
                className="box"
                onClick={() => history.push({
                  pathname: `${pathname}/${el._pKey}`,
                  state: el._pKey
                })}
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