/* Libraries */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* CSS */
import "./CSS/App.css";

/* Component/Pages */
import Homepage from "./Homepage";
import Page_Not_Found from "./Page_Not_Found";
import Flynet from "./Project/Flynet";
import HotelMeano from "./Project/HotelMeano";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route
          path="/hotel-meano"
          exact
          render={() => <HotelMeano color="#fd871f" />}
        />
        <Route path="/flynet" exact render={() => <Flynet color="#bf2431" />} />
        <Route path="/" component={Page_Not_Found} />
      </Switch>
    </Router>
  );
}

export default App;
