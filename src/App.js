import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css'
import Header from "./components/Header/Header";
import Error from "./components/styled-components/Error";
import Main from "./pages/Main/Main";
import Post from "./pages/Post/Post";
import UserPage from "./pages/UserPage/UserPage";
import Users from "./pages/Users/Users";

function App() {
  return (
    <Router >
      <Header />

      <Switch>
        <Route path="/posts/:id">
          <Post />
        </Route>
        <Route path="/users/:id">
          <UserPage />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Main />
        </Route>
        <Route path="*">
          <Error >This page does not exist.</Error>
        </Route>
      </Switch>
    </Router >
  );
}


export default App;
