import { PUT_POST, PUT_POSTS, PUT_USERS } from "./actions";

const defaultState = {
  posts: [],
  users: []
}

const mainReducer = (paramState = defaultState, action) => {
  const state = { ...paramState };
  switch (action.type) {
    case PUT_POSTS: {
      return {
        ...state,
        posts: action.payload
      }
    }
    case PUT_POST: {
      const [post, comments] = action.payload;
      console.log(action.payload)
      return {
        ...state,
        posts: [...state.posts.filter((e) => e.id !== post.id), { ...post, comments }]
      }
    }
    default:
      return { ...state }
  }
}

export default mainReducer;