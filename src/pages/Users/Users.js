import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/user/actions';

import CustomLink from '../../components/styled-components/CustomLink';
import { UserContacts, UserInfo, UserName } from '../../components/styled-components/User';
import Loader from '../../components/styled-components/Loader';
import Error from '../../components/styled-components/Error';

function Users() {

  const { users, loading, error } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <>
      {users && !error && <div>
        {users.map((user) =>
          <UserInfo key={user.id}>
            <UserName>
              {user.username} ({user.name})
            </UserName>
            <UserContacts>
              {user.email}, {user.phone}
            </UserContacts>
            <CustomLink to={`/users/${user.id}`} />
          </UserInfo>
        )}
      </div>}
      {loading && <Loader />}
      {error && <Error >An error occured</Error>}
    </>
  )
}

export default Users
