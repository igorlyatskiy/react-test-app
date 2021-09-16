import axios from 'axios'
import { takeEvery, put, call, all } from 'redux-saga/effects'

import { getPostsSuccess, getPostSuccess, getUsersSuccess, getUserSuccess, GET_POST, GET_POSTS, GET_USERS, GET_USER_DATA } from './actions'

const API_LINK = process.env.REACT_APP_API_LINK;
const axiosInstance = axios.create({ baseURL: API_LINK });

function fetchPosts() {
  return axiosInstance.get(`/posts`)
}

function* workerGetPosts() {
  const responce = yield call(fetchPosts)
  if (responce.status === 200) {
    yield put(getPostsSuccess(responce.data))
  }
}

function fetchPostInfo(id) {
  return axiosInstance.get(`/posts/${id}`)
}
function fetchPostComments(id) {
  return axiosInstance.get(`/posts/${id}/comments`)
}

function* workerGetAllPostData({ payload: id }) {
  const [postInfo, postComments] = yield all([
    call(fetchPostInfo, id),
    call(fetchPostComments, id)
  ]);
  if (postInfo.status === 200 && postComments.status === 200) {
    yield put(getPostSuccess([postInfo.data, postComments.data]))
  }
}

function fetchUsers() {
  return axiosInstance.get(`/users`)
}

function fetchUserPosts(id) {
  return axiosInstance.get(`/posts?userId=${id}`)
}

function* workerGetUsers() {
  const responce = yield call(fetchUsers)
  if (responce.status === 200) {
    yield put(getUsersSuccess(responce.data))
  }
}

function fetchUserInfo(id) {
  return axiosInstance.get(`/users/${id}`)
}

function* workerGetUserData({ payload: id }) {
  const [userInfo, userPosts] = yield all([
    call(fetchUserInfo, id),
    call(fetchUserPosts, id)
  ]);
  if (userInfo.status === 200 && userPosts.status === 200) {
    yield put(getUserSuccess([userInfo.data, userPosts.data]))
  }
}


export function* watchGetInfo() {
  yield all([
    takeEvery(GET_POSTS, workerGetPosts),
    takeEvery(GET_POST, workerGetAllPostData),
    takeEvery(GET_USERS, workerGetUsers),
    takeEvery(GET_USER_DATA, workerGetUserData)
  ]);
}