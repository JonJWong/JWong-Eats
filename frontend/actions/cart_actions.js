import * as CartAPIUtil from "../util/cart_api_util";

// Action constants
export const RECEIVE_CART_ITEMS = "RECEIVE_CART_ITEMS";
export const RECEIVE_CART_ITEM = "RECEIVE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const CHECKOUT = "CHECKOUT";

// Action creators
export const receiveCartItems = (items) => {
  return {
    type: RECEIVE_CART_ITEMS,
    items
  }
}

export const recieveCartItem = (item) => {
  return {
    type: RECEIVE_CART_ITEM,
    item
  }
}

export const removeCartItem = (itemId) => {
  return {
    type: REMOVE_CART_ITEM,
    itemId
  }
}

export const checkout = () => {
  return {
    type: CHECKOUT
  }
}

// Thunk action creators

export const postTransaction = (cart) => (dispatch) => {
  return CartAPIUtil.postTransaction(cart)
    .then(() => dispatch(checkout()))
}