import React from "react";
import { Header, Container } from "./index";

const MainContainer: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        {children}
      </Container>
    </>
  )
}

export { MainContainer };
