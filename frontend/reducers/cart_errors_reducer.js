import { RECEIVE_CART_ERRORS, CLEAR_CART_ERRORS } from "../actions/cart_actions";

const _nullCartErrors = [];

const cartErrorsReducer = (state=_nullCartErrors, action) => {
  Object.freeze(state);
  
  switch (action.type) {
    case RECEIVE_CART_ERRORS:
      return action.errors;;
    case CLEAR_CART_ERRORS:
      return _nullCartErrors;
    default:
      return state;
  };
};

export default cartErrorsReducer;