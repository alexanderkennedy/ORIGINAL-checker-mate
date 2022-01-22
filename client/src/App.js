import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
// import PlantersDailyList from "./pages/PlantersDailyList/PlantersDailyList";
// import PlantersMandatoryList from "./pages/PlantersMandatoryList/PlantersMandatoryList";
import PlantersMainList from "./pages/PlantersMainList/PlantersMainList";
import SiteFooter from "../src/components/SiteFooter/SiteFooter";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={PlantersMainList} />
        {/* These routes are for future pages. */}
        {/* <Route
          path="/planters-mandatory-list"
          component={PlantersMandatoryList}
        />
        <Route path="/planters-daily-list" component={PlantersDailyList} /> */}
      </Switch>
      <SiteFooter />
    </Router>

    
  );
}

export default App;
