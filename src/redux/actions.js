export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'

export const GET_POST = 'GET_POST'
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS'

export const getPosts = () => ({
  type: GET_POSTS,
});

export const getPostsSuccess = (posts) => ({
  type: GET_POSTS_SUCCESS,
  payload: posts
})

export const getPostData = (id) => ({
  type: GET_POST,
  payload: id
})

export const getPostSuccess = (data) => ({
  type: GET_POST_SUCCESS,
  payload: data
})


export const GET_USERS = 'GET_USERS'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'

export const GET_USER_DATA = 'GET_USER_DATA'
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS'

export const getUsers = () => ({
  type: GET_USERS,
});

export const getUsersSuccess = (users) => ({
  type: GET_USERS_SUCCESS,
  payload: users
})

export const getUserData = (id) => ({
  type: GET_USER_DATA,
  payload: id
})

export const getUserSuccess = (data) => ({
  type: GET_USER_DATA_SUCCESS,
  payload: data
})