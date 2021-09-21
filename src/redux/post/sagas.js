import { takeEvery, put, call, all } from 'redux-saga/effects'

import { axiosPostsInstance } from '../../api/axios';
import { getPostFailed, getPostsFailed, getPostsSuccess, getPostSuccess, GET_POST, GET_POSTS } from './actions';


function fetchPosts() {
  return axiosPostsInstance.get()
}

function* workerGetPosts() {
  try {
    const responce = yield call(fetchPosts)
    if (responce.status === 200) {
      yield put(getPostsSuccess(responce.data))
    }
  } catch (e) {
    yield put(getPostsFailed())
  }
}

function fetchPostInfo(id) {
  return axiosPostsInstance.get(`/${id}`)
}
function fetchPostComments(id) {
  return axiosPostsInstance.get(`/${id}/comments`)
}

function* workerGetAllPostData({ payload: id }) {
  try {
    const [postInfo, postComments] = yield all([
      call(fetchPostInfo, id),
      call(fetchPostComments, id)
    ]);
    if (postInfo.status === 200 && postComments.status === 200) {
      yield put(getPostSuccess([postInfo.data, postComments.data]))
    }
  } catch (e) {
    yield put(getPostFailed())
  }
}

export function* watchGetPosts() {
  yield all([
    takeEvery(GET_POSTS, workerGetPosts),
    takeEvery(GET_POST, workerGetAllPostData),
  ]);
}