import { useEffect } from "react";
import {
  Switch,
  Route
} from "react-router-dom"
import {
  MainContainer,
} from "./components"
import {
  MainPage,
  ListViewPage,
  AboutPage
} from "./pages/index";
import "./styles/global.css";
import {
  ROUTES
} from "./constants/index";
import { DetailPage } from "./pages/DetailPage";

const Routes = () => {
  return (
    <Switch>
      <MainContainer>
        <Route exact path={ROUTES.MAIN} component={MainPage} />
        <Route exact path={`${ROUTES.MAIN}:id`} component={ListViewPage} />
        <Route path={`${ROUTES.MAIN}:id/:item`} component={DetailPage} />
        <Route exact path={ROUTES.ABOUT} component={AboutPage} />
      </MainContainer>
    </Switch>
  );
}

export default Routes;
