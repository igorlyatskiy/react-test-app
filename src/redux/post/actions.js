import { createAction } from "@reduxjs/toolkit"

export const GET_POSTS = 'GET_POSTS'
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
export const GET_POSTS_FAILED = 'GET_POSTS_FAILED'

export const GET_POST = 'GET_POST'
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS'
export const GET_POST_FAILED = 'GET_POST_FAILED'


export const getPosts = createAction(GET_POSTS)
export const getPostsSuccess = createAction(GET_POSTS_SUCCESS)
export const getPostsFailed = createAction(GET_POSTS_FAILED)

export const getPostData = createAction(GET_POST)
export const getPostSuccess = createAction(GET_POST_SUCCESS)
export const getPostFailed = createAction(GET_POST_FAILED)
