import * as SessionAPIUtil from '../util/session_api_util'

// action constants
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

// action creators
export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  }
};

export const logoutCurrentUser = () => {
  return {
    type: REMOVE_CURRENT_USER
  }
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors
  }
};

export const clearSessionErrors = () => {
  return {
    type: CLEAR_SESSION_ERRORS
  }
};

// thunk action creators
export const login = (user) => (dispatch) => {
  return SessionAPIUtil.logIn(user)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
};

export const logout = () => (dispatch) => {
  return SessionAPIUtil.logOut()
    .then(() => dispatch(logoutCurrentUser()) )
};

export const signup = (user) => (dispatch) => {
  return SessionAPIUtil.signUp(user)
    .then(
      user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
};