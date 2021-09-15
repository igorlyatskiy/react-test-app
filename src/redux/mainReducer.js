import { GET_POSTS_SUCCESS, GET_POST_SUCCESS, GET_USERS_SUCCESS, GET_USER_DATA_SUCCESS } from "./actions";

const defaultState = {
  posts: [],
  users: []
}

const mainReducer = (paramState = defaultState, action) => {
  const state = { ...paramState };
  switch (action.type) {
    case GET_POSTS_SUCCESS: {
      return {
        ...state,
        posts: action.payload
      }
    }
    case GET_POST_SUCCESS: {
      const [post, comments] = action.payload;
      return {
        ...state,
        posts: [...state.posts.filter((e) => e.id !== post.id), { ...post, comments }]
      }
    }
    case GET_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload
      }
    }
    case GET_USER_DATA_SUCCESS: {
      const [userInfo, userPosts] = action.payload;
      return {
        ...state,
        users: [...state.users.filter((e) => +e.id !== +userInfo.id), { ...userInfo, posts: userPosts }]
      }
    }
    default:
      return { ...state }
  }
}

export default mainReducer;