import * as UserApiUtil from "../util/user_api_util";

// action constants
export const UPDATE_USER = 'UPDATE_USER';

// action creators
const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    user
  }
};

// thunk action creators
export const changeUserInfo = (user) => (dispatch) => {
  return UserApiUtil.changeUserInfo(user)
    .then(user => dispatch(updateUser(user)))
};