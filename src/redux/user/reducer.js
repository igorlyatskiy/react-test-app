import { createReducer } from "@reduxjs/toolkit";

import { getUserData, getUserFailed, getUsers, getUsersFailed, getUsersSuccess, getUserSuccess } from "./actions";

const defaultState = {
  users: [],
  loading: false,
  error: false
}

const userReducer = createReducer(defaultState, {
  [getUsers]: (state) => {
    state.loading = true;
    state.error = false;
  },
  [getUsersSuccess]: (state, { payload }) => {
    state.users = payload;
    state.loading = false;
    state.error = false;
  },
  [getUsersFailed]: (state) => {
    state.loading = false;
    state.error = true;
  },

  [getUserData]: (state) => {
    state.loading = true;
    state.error = false;
  },
  [getUserSuccess]: (state, { payload }) => {
    const [userInfo, userPosts] = payload;
    state.users = [...state.users.filter((e) => +e.id !== +userInfo.id), { ...userInfo, posts: userPosts }]
    state.loading = false;
    state.error = false;
  },
  [getUserFailed]: (state) => {
    state.loading = false;
    state.error = true;
  }
})

export default userReducer;