import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getPosts, getUsers } from '../../../redux/actions';
require("dotenv").config();

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 40px;
  max-width: 50vw;
  margin: 0 auto;
`;

const FlexElement = styled.div`
  margin: 20px;
  border: 1px solid #EA0042;
  border-radius: 20px;
  padding: 20px
`

const Heading = styled.h3`
  margin-bottom: 5px;
`

function Main() {
  const posts = useSelector(state => state.mainReducer.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
    <FlexContainer>
      {posts.map((post) =>
        <FlexElement key={post.id}>
          <Heading>{post.title}</Heading>
          <p>{post.body}</p>
        </FlexElement>
      )}
    </FlexContainer>
  )
}

export default Main
