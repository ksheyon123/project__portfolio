import {
  Routes,
  Route
} from "react-router-dom";
import {
  MainPage,
} from "src/pages/index";
import {
  ROUTES
} from "src/constants/index";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.MAIN} element={<MainPage />} />
    </Routes>
  );
}

export default Router;
