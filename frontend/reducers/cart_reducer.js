import { RECEIVE_CART_ITEMS, RECEIVE_CART_ITEM, REMOVE_CART_ITEM } from '../actions/cart_actions';

const cartReducer = (state={}, action) => {
  Object.freeze(state);
  const nextState =  Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CART_ITEMS:
      nextState.cart.push(action.cartItems);
      return nextState;
    case RECEIVE_CART_ITEM:
      nextState.cart.push(action.cartItem);
      return nextState;
    case REMOVE_CART_ITEM:
      delete nextState.cart[action.itemId];
      return nextState;
    case CHECKOUT:
      nextState.cart = [];
      return nextState;
    default:
      return state;
  }
};

export default cartReducer;