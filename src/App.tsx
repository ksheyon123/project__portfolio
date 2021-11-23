import { useEffect } from "react";
import {
  Switch,
  Route
} from "react-router-dom"
import {
  MainContainer,

} from "./components"
import {
  PageChanger
} from "./components/common";
import {
  BaseTemplate,
  MainPage,
  SubjectPage
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
        <Route exact path="/subject" component={SubjectPage} />
      </MainContainer>
    </Switch>
  );
}

export default Routes;
