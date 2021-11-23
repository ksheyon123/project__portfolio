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

const Routes = () => {

  return (
    <Switch>
      <MainContainer>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/subject" component={SubjectPage} />
      </MainContainer>
    </Switch>
  );
}

export default Routes;
