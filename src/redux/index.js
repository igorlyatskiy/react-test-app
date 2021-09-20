import { combineReducers } from '@reduxjs/toolkit';

import postReducer from './post/reducer'
import userReducer from "./user/reducer";

export default combineReducers({
  postReducer,
  userReducer
})