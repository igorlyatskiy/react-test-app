import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import styled from 'styled-components';

import { getPostData } from '../../redux/post/actions';
import { PostCommentsHeading, PostHeading } from '../../components/styled-components/Post';
import Error from '../../components/styled-components/Error';
import Loader from '../../components/styled-components/Loader';

const PostPageContainer = styled.div`
  width: 60vw;
  margin: 20px auto 0;
  background: #1F1B2E;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 20px;
  max-width: 960px;
`

const PostContext = styled.p`
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 2px;
  text-align: left;
  color: #EA0042;
  margin-bottom: 10px;
`

const CommentText = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 2px;
  text-align: justify;
  color: #fefefe;
  margin-bottom: 10px;
`

const CommentContainer = styled.div`
  padding: 10px 0;
  border-top: 1px solid #fff;

  &:first-of-type{
    border: 0px;
  }
`

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

const ContactsBlock = styled.span`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 2px;
  text-align: left;
  color: #ffa500;
  max-width: 50%;
`

function Post() {
  const { posts, error, loading } = useSelector(state => state.postReducer);
  const { id } = useParams();
  const dispatch = useDispatch();

  const selectedPost = posts.find((e) => +e.id === +id);

  let comments = [];
  if (selectedPost) {
    comments = selectedPost.comments;
  }

  useEffect(() => {
    dispatch(getPostData(id))
  }, [])

  return (
    <>
      {selectedPost && !error &&
        <PostPageContainer>
          <PostHeading>{selectedPost.title}</PostHeading>
          <PostContext>{selectedPost.body}</PostContext>
          <PostCommentsHeading>Comments: </PostCommentsHeading>
          {comments && comments.map((e) =>
            <CommentContainer key={e.id}>
              <CommentText>{e.body}</CommentText>
              <RowContainer>
                <ContactsBlock>{e.name}</ContactsBlock>
                <ContactsBlock>{e.email}</ContactsBlock>
              </RowContainer>
            </CommentContainer>)
          }
        </PostPageContainer>}
      {error && <Error >404, Post not found</Error>}
      {loading && <Loader />}
    </>
  )
}

export default Post