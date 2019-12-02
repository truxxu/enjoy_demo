import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage";
import ServiceListPage from "./components/ServiceListPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/services" exact component={ServiceListPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
