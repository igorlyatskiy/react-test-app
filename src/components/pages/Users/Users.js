import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getUsers } from '../../../redux/actions';

const UserInfo = styled.div`
  padding: 20px;
  border: 1px solid #fff;
  border-radius: 20px;
  max-width: 600px;
  margin: 20px auto;
`

function Users() {

  const users = useSelector(state => state.mainReducer.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <div>
      {users && <div>
        {users.map((e) =>
          <UserInfo>
            {e.name}
          </UserInfo>
        )}
      </div>}
    </div>
  )
}

export default Users
