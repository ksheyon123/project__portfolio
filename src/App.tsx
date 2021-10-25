import { useEffect } from "react";
import {
  Switch,
  Route
} from "react-router-dom"
import {
  MainContainer
} from "./components"
import {
  PageChanger
} from "./components/common";
import {
  BaseTemplate,
  MainPage,
  LaboratoryPage
} from "./pages/index";
import "./styles/global.css";

import {
  useRecoilValue
} from "recoil";
import {
  pageTransition
} from "./states/GlobalState";

const Routes = () => {
  const isPageChanged = useRecoilValue(pageTransition);
  useEffect(() => {

  }, []);

  return (
    <Switch>
      {
        isPageChanged && <PageChanger />
      }
      <MainContainer>
        <Route exact path="/" component={MainPage} />
        <Route path="/lab" component={LaboratoryPage} />
      </MainContainer>
    </Switch>
  );
}

export default Routes;
