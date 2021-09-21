import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import styled from 'styled-components';

import { getUserData } from '../../redux/user/actions';
import CustomLink from '../../components/styled-components/CustomLink';
import { LittlePostHeading, PostElement } from '../../components/styled-components/Post';
import { UserContacts, UserInfo, UserName } from '../../components/styled-components/User';
import Error from '../../components/styled-components/Error';
import Loader from '../../components/styled-components/Loader';

const UserAdress = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 2px;
  text-align: justify;
  color: #ffa500;
  margin-top: 5px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function UserPage() {

  const dispatch = useDispatch()
  const { id } = useParams();

  const { users, loading, error } = useSelector(state => state.userReducer);
  const user = users.find((user) => +user.id === +id);

  useEffect(() => {
    dispatch(getUserData(id))
  }, [dispatch, id])

  return (
    <>
      {loading ? <Loader /> :
        <>
          {!error && user ?
            <Wrapper>
              <UserInfo key={user.id}>
                <UserName>
                  {user.username} ({user.name})
                </UserName>
                <UserContacts>
                  {user.email}, {user.phone}
                </UserContacts>
                <UserAdress>
                  {user.address.city}, {user.address.street}
                </UserAdress>
              </UserInfo>
              {user.posts && user.posts.map((post) =>
                <PostElement key={post.id}>
                  <LittlePostHeading>{post.title}</LittlePostHeading>
                  <p>{post.body}</p>
                  <CustomLink to={`/posts/${post.id}`} />
                </PostElement>)}
            </Wrapper> : <Error>404, User not found</Error>
          }
        </>
      }
    </ >
  )
}

export default UserPage
