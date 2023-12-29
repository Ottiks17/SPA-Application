import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainView from "../MainView";
import CharacterDetails from "./CharacterDetails";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainView />
        </Route>
        <Route path="/character/:id">
          <CharacterDetails />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;