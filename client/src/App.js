import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import SiteHeader from "./components/SiteHeader/SiteHeader";
import MainList from "./pages/PlantersMainList/PlantersMainList";
import Login from "./pages/Login/Login";
import SiteFooter from "../src/components/SiteFooter/SiteFooter";
function App() {
  return (
    <Router>
      <SiteHeader />
      <Switch>
        <Route path="/Login"  component={Login} />
        <Route path="/MainList"  component={MainList} />
        {/* These routes are for future pages. */}
        
        {/* <Route path="/planters-daily-list" component={PlantersDailyList} /> */}
      </Switch>

      <SiteFooter />
    </Router>

    
  );
}

export default App;
