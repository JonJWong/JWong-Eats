import * as CartAPIUtil from "../util/cart_api_util";

// Action constants
export const ADD_CART_ITEM = "ADD_CART_ITEM";
export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const CLEAR_CART = "CLEAR_CART";
export const RECEIVE_CART_ERRORS = "RECEIVE_CART_ERRORS";
export const CLEAR_CART_ERRORS = "CLEAR_CART_ERRORS";

// Action creators
export const addCartItem = (quantity, item) => {
  return {
    type: ADD_CART_ITEM,
    item,
    quantity
  }
}

export const updateCartItem = (quantity, item) => {
  return {
    type: UPDATE_CART_ITEM,
    item,
    quantity
  }
}

export const removeCartItem = (quantity, item) => {
  return {
    type: REMOVE_CART_ITEM,
    item,
    quantity
  }
}

export const clearCart = () => {
  return {
    type: CLEAR_CART
  }
}

export const receiveCartErrors = (errors) => {
  return {
    type: RECEIVE_CART_ERRORS,
    errors
  }
}

export const clearCartErrors = () => {
  return {
    type: CLEAR_CART_ERRORS
  }
}

// Thunk action creators
export const postTransaction = (cart) => (dispatch) => {
  return CartAPIUtil.postTransaction(cart)
    .then(
      () => dispatch(clearCart()),
      err => dispatch(receiveCartErrors(err)))
}