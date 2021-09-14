import axios from 'axios'
import { takeEvery, put, call, all, takeLatest } from 'redux-saga/effects'
import { GET_POST, GET_POSTS, GET_USERS, putPostData, putPosts, putUsers } from './actions'
require("dotenv").config();

const API_LINK = process.env.REACT_APP_API_LINK;

function fetchPosts() {
  return axios.get(`${API_LINK}/posts`)
}

function* workerGetPosts() {
  const responce = yield call(fetchPosts)
  if (responce.status === 200) {
    yield put(putPosts(responce.data))
  }
}

function fetchPostInfo(id) {
  return axios.get(`${API_LINK}/posts/${id}`)
}
function fetchPostComments(id) {
  return axios.get(`${API_LINK}/posts/${id}/comments`)
}

function* workerGetAllPostData({ payload: id }) {
  const [postInfo, postComments] = yield all([
    call(fetchPostInfo, id),
    call(fetchPostComments, id)
  ]);
  if (postInfo.status === 200 && postComments.status === 200) {
    yield put(putPostData([postInfo.data, postComments.data]))
  }
}

function fetchUsers() {
  return axios.get(`${API_LINK}/users`)
}

function* workerGetUsers() {
  const responce = yield call(fetchUsers)
  if (responce.status === 200) {
    yield put(putUsers(responce.data))
  }
}


export function* watchGetInfo() {
  yield all([
    takeEvery(GET_POSTS, workerGetPosts),
    takeEvery(GET_POST, workerGetAllPostData),
    takeEvery(GET_USERS, workerGetUsers)
  ]);
}