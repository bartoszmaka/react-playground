import { SET_CURRENT_USER, SET_CURRENT_USER_ROLE } from '../actionTypes/appState';

export const initialState = {
  currentUser: {
    email: 'b.maka@selleo.com',
    role: 'user'
  }
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: payload
      }
    }

    case SET_CURRENT_USER_ROLE: {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          role: payload
        }
      }
    }

    default: {
      return state;
    }
  }
}
