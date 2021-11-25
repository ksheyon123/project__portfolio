import { useEffect } from "react";
import {
  Switch,
  Route
} from "react-router-dom"
import {
  MainContainer,
} from "./components"
import {
  BaseTemplate,
  MainPage,
  SubjectPage
} from "./pages/index";
import "./styles/global.css";
import {
  ROUTES
} from "./constants/index";


const Routes = () => {

  return (
    <Switch>
      <MainContainer>
        <Route exact path={ROUTES.MAIN} component={MainPage} />
        <Route exact path={ROUTES.JAVASCRIPT} component={SubjectPage} />
        <Route exact path={ROUTES.BLOCKCHAIN} component={SubjectPage} />
      </MainContainer>
    </Switch>
  );
}

export default Routes;
