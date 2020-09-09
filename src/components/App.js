import React, { useState } from "react";
import NavBar from "./NavBar";
import Properties from "./Properties";
import AddProperties from "./AddProperty";
import SavedProperties from "./SavedProperties";

import "../styles/App.css";
import { Route, Switch } from "react-router-dom";

function App() {
  const [userId, setUserId] = useState("");

  const handleLogin = (response) => {
    setUserId(response.userID);
  };

  const handleLogout = () => {
    window.FB.logout(() => setUserId(""));
  };

  return (
    <div className="App">
      <NavBar onLogin={handleLogin} userId={userId} onLogout={handleLogout} />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Properties {...props} userId={userId} />}
        ></Route>
        <Route exact path="/add-property">
          <AddProperties />
        </Route>
        <Route exact path="/saved-properties">
          {userId && <SavedProperties />}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
