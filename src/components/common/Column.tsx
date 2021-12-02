import React from "react";
import styled from 'styled-components';

const StyledColumn = styled.div`
  display: flex;
  width : 800px;
  flex-direction:column;
`;

const Column: React.FC = ({ children }) => {
  return (
    <StyledColumn>
      {children}
    </StyledColumn>
  )

}

export { Column };