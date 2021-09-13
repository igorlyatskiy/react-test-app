import React from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import styled from "styled-components";
import './App.css'
import Main from "./components/pages/Main/Main";
import Users from "./components/pages/Users/Users";
import { getPosts } from "./redux/actions";

const Header = styled.header`
  height: 80px;
  padding: 10px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #1F1B2E;
`;

const CustomLink = styled(Link)`
  color: #f4f4f4;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.0125em;
  text-align: left;
`

const List = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`

const ListItem = styled.li`
  margin: 0 10px;
`;

function App() {
  const dispatch = useDispatch();

  return (
    <Router >
      <Header>
        <List>
          <ListItem>
            <CustomLink to="/">Main</CustomLink>
          </ListItem>
          <ListItem>
            <CustomLink to="/users">Posts</CustomLink>
          </ListItem>
        </List>
      </Header>

      <Switch>
        <Route path="/">
          <Main />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </Router >
  );
}

const UnknownComponent = () => <h3>Sorry, this link does not exist :( </h3>

export default App;
