import React, { ReactNode } from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import { Layout, Header } from "src/components/index";
import {
  DetailPage,
  MainPage,
} from "src/pages/index";
import {
  ROUTES
} from "src/constants/index";

const Wrapper: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Layout>
        {children}
      </Layout>
    </>
  )
}

const Router = () => {
  return (
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={
          <Wrapper>
            <MainPage />
          </Wrapper>
        } />
      <Route
        path={ROUTES.DETAIL}
        element={
          <Wrapper>
            <DetailPage />
          </Wrapper>
        } />
    </Routes>
  );
}

export default Router;
