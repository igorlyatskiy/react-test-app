import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css'
import Header from "./components/Header/Header";
import Main from "./components/pages/Main/Main";
import Post from "./components/pages/Post/Post";
import Users from "./components/pages/Users/Users";

function App() {
  return (
    <Router >
      <Header />

      <Switch>
        <Route path="/posts/:id">
          <Post />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Main />
        </Route>
        <Route path="*">
          <UnknownComponent />
        </Route>
      </Switch>
    </Router >
  );
}

const UnknownComponent = () => <h3>Sorry, this link does not exist :( </h3>

export default App;
