import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { UPDATE_USER, RECEIVE_USER } from "../actions/user_actions";

const usersReducer = (state={}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER: case UPDATE_USER: case RECEIVE_USER:
      nextState[action.user.id] = action.user;
      return nextState;
    default:
      return state;
  }
};

export default usersReducer;