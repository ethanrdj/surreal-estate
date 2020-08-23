import React from "react";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperties from "./AddProperty";

import "../styles/App.css";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Properties />
        </Route>
        <Route exact path="/add-property">
          <AddProperties />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
