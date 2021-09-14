import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CustomHeader = styled.header`
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
  transition: all linear 200ms;
  &:hover{
    color: #EA0042
  }
`

const List = styled.ul`
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`

const ListItem = styled.li`
  margin: 0 20px;
`;

function Header() {
  return (
    <CustomHeader>
      <List>
        <ListItem>
          <CustomLink to="/">Posts</CustomLink>
        </ListItem>
        <ListItem>
          <CustomLink to="/users">Users</CustomLink>
        </ListItem>
      </List>
    </CustomHeader>
  )
}

export default Header
