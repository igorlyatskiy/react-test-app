import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router';
import styled from 'styled-components';
import { getUserData } from '../../../redux/actions'
import CustomLink from '../../styled-components/CustomLink';
import { LittlePostHeading, PostElement } from '../../styled-components/Post';
import { UserContacts, UserInfo, UserName } from '../../styled-components/User';

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

  const users = useSelector(state => state.mainReducer.users);
  const user = users.find((e) => +e.id === +id);

  useEffect(() => {
    dispatch(getUserData(id))
  }, [])

  return (
    <>
      {
        user &&
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
            <PostElement>
              <LittlePostHeading>{post.title}</LittlePostHeading>
              <p>{post.body}</p>
              <CustomLink to={`/posts/${post.id}`} />
            </PostElement>)}
        </Wrapper>}
    </ >
  )
}

export default UserPage
