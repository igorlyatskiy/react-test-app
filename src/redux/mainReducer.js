import { PUT_POSTS, PUT_USERS } from "./actions";

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
    case PUT_USERS: {
      return {
        ...state,
        users: action.payload
      }
    }
    default:
      return { ...state }
  }
}

export default mainReducer;