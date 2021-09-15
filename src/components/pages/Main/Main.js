import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getPosts } from '../../../redux/actions';
import CustomLink from '../../styled-components/CustomLink';
import { LittlePostHeading, PostElement } from '../../styled-components/Post';
require("dotenv").config();

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 40px;
  margin: 0 auto;
  justify-content: space-around;
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
        <PostElement key={post.id}>
          <CustomLink to={`/posts/${post.id}`} />
          <LittlePostHeading>{post.title}</LittlePostHeading>
          <p>{post.body}</p>
        </PostElement>
      )}
    </FlexContainer>
  )
}

export default Main
