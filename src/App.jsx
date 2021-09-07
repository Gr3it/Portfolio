/* Libraries */

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* CSS */
import "./CSS/App.css";

/* Component/Pages */
import ScrollToTop from "./Components/scrollToTop";

const Homepage = React.lazy(() => import("./Homepage"));
const Page_Not_Found = React.lazy(() => import("./Page_Not_Found"));
const Flynet = React.lazy(() => import("./Project/Flynet"));
const HotelMeano = React.lazy(() => import("./Project/HotelMeano"));

function App() {
  return (
    <React.Suspense fallback={<span>Loading...</span>}>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route
            path="/hotel-meano"
            exact
            render={() => <HotelMeano color="#fd871f" />}
          />
          <Route
            path="/flynet"
            exact
            render={() => <Flynet color="#bf2431" />}
          />
          <Route path="/" component={Page_Not_Found} />
        </Switch>
      </Router>
    </React.Suspense>
  );
}

export default App;
