import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { Header } from "./common/Header";
import { MainLayout } from "./common/MainLayout";
const MainContainer: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <MainLayout children={children} />
    </>
  )
}

export { MainContainer };
