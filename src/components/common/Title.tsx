import React from "react";
import styled from 'styled-components';

const StyledTitle = styled.div`
  width : 100%;
  padding : 10px;
  font-size : 24px;
  font-weight: bold;
  background-color: #FFF;
  box-sizing: border-box;
`;

const Title: React.FC<{ title: string }> = (props) => {
  const {
    title = ""
  } = props;

  return (
    <StyledTitle>
      {title.split("\n").map(el => {
        return (
          <>
            {el} <br />
          </>
        )
      })}
    </StyledTitle>
  )
}

export { Title }