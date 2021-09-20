import { createReducer } from "@reduxjs/toolkit";

import { getPostData, getPostFailed, getPosts, getPostsFailed, getPostsSuccess, getPostSuccess } from "./actions";


const defaultState = {
  posts: [],
  loading: false,
  error: false
}

const postReducer = createReducer(defaultState, {
  [getPosts]: (state) => {
    state.loading = true;
    state.error = false;
  },
  [getPostsSuccess]: (state, { payload }) => {
    state.posts = payload;
    state.loading = false;
    state.error = false;
  },
  [getPostsFailed]: (state) => {
    state.loading = false;
    state.error = true;
  },

  [getPostData]: (state) => {
    state.loading = true;
    state.error = false;
  },
  [getPostSuccess]: (state, { payload }) => {
    const [post, comments] = payload;
    state.posts = [...state.posts.filter((e) => e.id !== post.id), { ...post, comments }]
    state.loading = false;
    state.error = false;
  },
  [getPostFailed]: (state) => {
    state.loading = false;
    state.error = true;
  },
})

export default postReducer;
