import { SET_CURRENT_USER, SET_CURRENT_USER_ROLE } from '../actionTypes/appState';

export const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user,
})

export const setCurrentUserRole = role => ({
  type: SET_CURRENT_USER_ROLE,
  payload: role,
})
