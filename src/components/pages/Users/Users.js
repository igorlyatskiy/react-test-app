import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../redux/actions';
import CustomLink from '../../styled-components/CustomLink';
import { UserContacts, UserInfo, UserName } from '../../styled-components/User';

function Users() {

  const users = useSelector(state => state.mainReducer.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <>
      {users && <div>
        {users.map((e) =>
          <UserInfo key={e.id}>
            <UserName>
              {e.username} ({e.name})
            </UserName>
            <UserContacts>
              {e.email}, {e.phone}
            </UserContacts>
            <CustomLink to={`/users/${e.id}`} />
          </UserInfo>
        )}
      </div>}
    </>
  )
}

export default Users
