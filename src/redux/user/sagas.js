import { takeEvery, put, call, all } from 'redux-saga/effects'

import { axiosPostsInstance, axiosUsersInstance } from '../../api/axios';
import { getUserFailed, getUsersFailed, getUsersSuccess, getUserSuccess, GET_USERS, GET_USER_DATA } from './actions';


function fetchUsers() {
  return axiosUsersInstance.get()
}

function fetchUserPosts(id) {
  return axiosPostsInstance.get(`?userId=${id}`)
}

function* workerGetUsers() {
  try {
    const responce = yield call(fetchUsers)
    if (responce.status === 200) {
      yield put(getUsersSuccess(responce.data))
    }
  } catch (e) {
    yield put(getUsersFailed())
  }
}

function fetchUserInfo(id) {
  return axiosUsersInstance.get(`/${id}`)
}

function* workerGetUserData({ payload: id }) {
  try {
    const [userInfo, userPosts] = yield all([
      call(fetchUserInfo, id),
      call(fetchUserPosts, id)
    ]);
    if (userInfo.status === 200 && userPosts.status === 200) {
      yield put(getUserSuccess([userInfo.data, userPosts.data]))
    }
  } catch (e) {
    yield put(getUserFailed())
  }
}


export function* watchGetUsers() {
  yield all([
    takeEvery(GET_USERS, workerGetUsers),
    takeEvery(GET_USER_DATA, workerGetUserData)
  ]);
}