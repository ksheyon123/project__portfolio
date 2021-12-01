import React from "react";
import styled from 'styled-components';

const StyledFlex = styled.div`
  display: flex;
`;

const Flex: React.FC = ({ children }) => {
  return (
    <StyledFlex>
      {children}
    </StyledFlex>
  )

}

export { Flex };