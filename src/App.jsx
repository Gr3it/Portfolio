/* Libraries */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* CSS */
import "./CSS/App.css";

/* Component/Pages */
import Homepage from "./Homepage";
import Page_Not_Found from "./Page_Not_Found";
import Flynet from "./Project/Flynet";
import Hotel_Meano from "./Project/Hotel_Meano";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/hotel-meano" exact component={Hotel_Meano} />
          <Route path="/flynet" exact component={Flynet} />
          <Route path="/" component={Page_Not_Found} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
