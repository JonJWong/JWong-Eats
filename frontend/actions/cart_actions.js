import * as CartAPIUtil from "../util/cart_api_util";

// Action constants
export const ADD_CART_ITEM = "ADD_CART_ITEM";
export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const CHECKOUT = "CHECKOUT";

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

export const checkout = (cart) => {
  return {
    type: CHECKOUT,
    cart
  }
}

// Thunk action creators
export const postTransaction = (cart) => (dispatch) => {
  return CartAPIUtil.postTransaction(cart)
    .then(() => dispatch(checkout()))
}