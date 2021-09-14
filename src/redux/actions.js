export const GET_POSTS = 'GET_POSTS'
export const PUT_POSTS = 'PUT_POSTS'

export const GET_POST = 'GET_POST'
export const PUT_POST = 'PUT_POST'

export const getPosts = () => ({
  type: GET_POSTS,
});

export const putPosts = (posts) => ({
  type: PUT_POSTS,
  payload: posts
})

export const getPostData = (id) => ({
  type: GET_POST,
  payload: id
})

export const putPostData = (data) => ({
  type: PUT_POST,
  payload: data
})


export const GET_USERS = 'GET_USERS'
export const PUT_USERS = 'PUT_USERS'

export const GET_USER_DATA = 'GET_USER_DATA'
export const PUT_USER_DATA = 'PUT_USER_DATA'

export const getUsers = () => ({
  type: GET_USERS,
});

export const putUsers = (users) => ({
  type: PUT_USERS,
  payload: users
})

export const getUserData = (id) => ({
  type: GET_USER_DATA,
  payload: id
})

export const putUserData = (data) => ({
  type: PUT_USER_DATA,
  payload: data
})
