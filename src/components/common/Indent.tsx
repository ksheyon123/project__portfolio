import React from "react";
import styled from "styled-components";
import {
  dateToLocaleString
} from "../../utils/index";

const StyledIndent = styled.div`
  width :100%;
  padding : 10px;
  font-size: 14px;
  font-weight: 600;
  background-color: #FFF;
  & .keywords {
    display: flex;
  }
`;

interface Props {
  writer: string[];
  date: number;
  keyword: string[];
}

const Indent: React.FC<Props> = (props) => {

  const {
    writer = [],
    date,
    keyword
  } = props;

  return (
    <StyledIndent>
      <div>
        {
          writer.map((el) => {
            return (
              <span>{el}</span>
            )
          })
        }

        <span> </span> - <span>{dateToLocaleString(date)}</span>
      </div>
      <div className="keywords">
        {
          keyword.map((el) => {
            return (
              <div >
                {el}
              </div>
            )
          })
        }
      </div>
    </StyledIndent >
  );
}

export { Indent }