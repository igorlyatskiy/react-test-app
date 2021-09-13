export const GET_POSTS = 'GET_POSTS'
export const PUT_POSTS = 'PUT_POSTS'
export const GET_USERS = 'GET_USERS'
export const PUT_USERS = 'PUT_USERS'

export const getPosts = () => ({
  type: GET_POSTS,
});

export const getUsers = () => ({
  type: GET_USERS,
});

export const putPosts = (posts) => ({
  type: PUT_POSTS,
  payload: posts
})

export const putUsers = (users) => ({
  type: PUT_USERS,
  payload: users
})