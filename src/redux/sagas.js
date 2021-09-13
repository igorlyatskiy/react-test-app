import axios from 'axios'
import { takeEvery, put, call } from 'redux-saga/effects'
import { GET_POSTS, putPosts } from './actions'
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

export function* watchGetPosts() {
  yield takeEvery(GET_POSTS, workerGetPosts)
}