import { createAction } from "@reduxjs/toolkit"

export const GET_USERS = 'GET_USERS'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_FAILED = 'GET_USERS_FAILED'

export const GET_USER_DATA = 'GET_USER_DATA'
export const GET_USER_DATA_SUCCESS = 'GET_USER_DATA_SUCCESS'
export const GET_USER_FAILED = 'GET_USER_FAILED'


export const getUsers = createAction(GET_USERS)
export const getUsersSuccess = createAction(GET_USERS_SUCCESS)
export const getUsersFailed = createAction(GET_USERS_FAILED)

export const getUserData = createAction(GET_USER_DATA)
export const getUserSuccess = createAction(GET_USER_DATA_SUCCESS)
export const getUserFailed = createAction(GET_USER_FAILED)