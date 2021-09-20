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
  }, [])

  return (
    <>
      {users && !error && <div>
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
      {loading && <Loader />}
      {error && <Error >An error occured</Error>}
    </>
  )
}

export default Users
