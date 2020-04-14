import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ChartTable from "./components/home";
import Histogram from "./components/chart";
import "./App.css";

//Redux
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route exact path="/home" component={ChartTable} />
          <Route exact path="/chart/:cid?" component={Histogram} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
