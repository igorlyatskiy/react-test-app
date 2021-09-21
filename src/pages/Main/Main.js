import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { getPosts } from '../../redux/post/actions';
import CustomLink from '../../components/styled-components/CustomLink';
import { LittlePostHeading, PostElement } from '../../components/styled-components/Post';
import Loader from '../../components/styled-components/Loader';
import Error from '../../components/styled-components/Error';

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 40px;
  margin: 0 auto;
  justify-content: space-around;
`;

function Main() {
  const { posts, error, loading } = useSelector(state => state.postReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <>
      {loading ? <Loader /> :
        <FlexContainer>
          {!error ? posts.map((post) =>
            <PostElement key={post.id}>
              <CustomLink to={`/posts/${post.id}`} />
              <LittlePostHeading>{post.title}</LittlePostHeading>
              <p>{post.body}</p>
            </PostElement>
          ) : <Error >An error occured</Error>
          }
        </FlexContainer>
      }
    </>
  )
}

export default Main
