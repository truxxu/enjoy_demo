import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage";
import ServiceListPage from "./components/ServiceListPage";
import SalonPage from "./components/SalonPage";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/services" exact component={ServiceListPage} />
          <Route path="/salon/:id" exact component={SalonPage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
