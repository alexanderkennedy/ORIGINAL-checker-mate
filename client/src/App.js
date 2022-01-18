import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import PlantersDailyList from "./pages/PlantersDailyList/PlantersDailyList";
import PlantersMandatoryList from "./pages/PlantersMandatoryList/PlantersMandatoryList";
import PlantersMainList from "./pages/PlantersMainList/PlantersMainList";
function App() {
  return (
    <Router>
      <div className="container">
        <p></p>
      </div>
      <Switch>
        <Route path="/" component={PlantersMainList} />
        <Route
          path="/planters-mandatory-list"
          component={PlantersMandatoryList}
        />
        <Route path="/planters-daily-list" component={PlantersDailyList} />
      </Switch>
    </Router>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
