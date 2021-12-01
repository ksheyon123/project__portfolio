import React from "react";
import styled from 'styled-components';

const StyledColumn = styled.div`
  display: flex;
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