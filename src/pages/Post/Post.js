import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import styled from 'styled-components';

import { getPostData } from '../../redux/post/actions';
import { PostCommentsHeading, PostHeading } from '../../components/styled-components/Post';
import Error from '../../components/styled-components/Error';
import Loader from '../../components/styled-components/Loader';
import { UserContacts, UserInfo } from '../../components/styled-components/User';
import { axiosUsersInstance } from '../../Api/axios';

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

function getUser(setUser, id) {
  try {
    axiosUsersInstance.get(`/${id}`)
      .then((user) => {
        if (user.status === 200) {
          setUser(user.data);
        }
      });
  } catch { }
}

function Post() {
  const { posts, error, loading } = useSelector(state => state.postReducer);
  const { users } = useSelector(state => state.userReducer);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  const selectedPost = posts.find((post) => +post.id === +id);
  const userId = selectedPost ? selectedPost.userId : null;
  const selectedUser = selectedPost ? users.find((user) => +user.id === +userId) : null;
  const comments = selectedPost ? selectedPost.comments : [];


  useEffect(() => {
    dispatch(getPostData(id))

    if (selectedUser && !user) {
      setUser(selectedUser);
    } else {
      if (userId) {
        getUser(setUser, userId);
      }
    }
  }, [dispatch, userId])

  return (
    <>
      {loading ? <Loader /> :
        <>
          {!error && selectedPost ?
            <PostPageContainer>
              <PostHeading>{selectedPost.title}</PostHeading>
              <PostContext>{selectedPost.body}</PostContext>
              {user &&
                <UserInfo>
                  <UserContacts>{user.email}</UserContacts>
                </UserInfo>
              }
              <PostCommentsHeading>Comments: </PostCommentsHeading>
              {comments && comments.map((comment) =>
                <CommentContainer key={comment.id}>
                  <CommentText>{comment.body}</CommentText>
                  <RowContainer>
                    <ContactsBlock>{comment.name}</ContactsBlock>
                    <ContactsBlock>{comment.email}</ContactsBlock>
                  </RowContainer>
                </CommentContainer>)
              }
            </PostPageContainer> : <Error>404, Post not found</Error>
          }
        </>
      }
    </>
  )
}

export default Post
