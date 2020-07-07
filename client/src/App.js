import React, { Component } from "react";
import Search from "./pages/search";
import Saved from "./pages/saved";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
<Router>
<div>
<NavBar />
<Switch>
<Route exact path={["/", "/search"]}>
<Search />
</Route>
<Route exact path={["/", "/saved"]}>
<Saved />
</Route>
</Switch>
</div>
</Router>
  );
};

export default App;