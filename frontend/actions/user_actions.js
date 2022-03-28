import * as UserApiUtil from "../util/user_api_util";
import { receiveErrors } from "./session_actions";

// action constants
export const UPDATE_USER = 'UPDATE_USER';
export const RECEIVE_USER = "RECEIVE_USER";

// action creators
const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    user
  }
};

const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  }
}

// thunk action creators
export const changeUserInfo = (user) => (dispatch) => {
  return UserApiUtil.changeUserInfo(user)
    .then(
      user => dispatch(updateUser(user)),
      err => dispatch(receiveErrors(err.responseJSON))
    )
};

export const fetchUser = (userId) => (dispatch) => {
  return UserApiUtil.fetchUser(userId)
    .then(
      user => dispatch(receiveUser(user))
    )
}