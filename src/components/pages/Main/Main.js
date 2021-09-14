import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getPosts, getUsers } from '../../../redux/actions';
require("dotenv").config();

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 40px;
  margin: 0 auto;
  justify-content: space-around;
`;

const FlexElement = styled.div`
  width: calc(50% - 20px);
  max-width: 40vw;
  margin: 20px 0;
  border: 1px solid #EA0042;
  border-radius: 20px;
  padding: 20px;
  position: relative;
`

const Heading = styled.h3`
  margin-bottom: 5px;
`;

const CustomLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 20px;
`;

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
          <CustomLink to={`/posts/${post.id}`} />
          <Heading>{post.title}</Heading>
          <p>{post.body}</p>
        </FlexElement>
      )}
    </FlexContainer>
  )
}

export default Main
