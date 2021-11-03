import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./pages/users/Index";
import Header from "./components/header/Index";
import NewUser from "./pages/newUser/Index";
import Sidebar from "./components/sidebar/Index";

function App() {
  return (
    <Router>
      <Header/>
      <Sidebar/>
       <Switch>
          <Route exact path="/">
            <Users />
          </Route>
          <Route path="/NewUser">
            <NewUser />
          </Route>
       </Switch>
    </Router>
  );
}

export default App;
