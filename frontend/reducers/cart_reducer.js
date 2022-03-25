import { RECEIVE_CART_ITEM, UPDATE_CART_ITEM, REMOVE_CART_ITEM, CHECKOUT } from "../actions/cart_actions";

const cartReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  // deconstruct action for syntax
  let { quantity, item } = action;
  // save item id to a const
  const itemId = item.id;
  // add quantity key to item
  item = Object.assign( item, { quantity } )

  switch (action.type) {
    case RECEIVE_CART_ITEM:
      // check if itemId key exists in cart (if this item is already in cart)
      if (!state.entities.cart.itemId) {
        // if not, add it to cart and return
        return Object.assign({}, state, { [itemId]: item })
      } else {
        // otherwise increment the quantity and return
        item.quantity += quantity;
        return Object.assign({}, state, { [itemId] : item })
      }
    case UPDATE_CART_ITEM:
      // update item quantity
      item.quantity += quantity;
      // check if item quantity is valid, if below 0, delete key
      // otherwise return updated quantity
      if (item.quantity <= 0) {
        delete newState.itemId;
        return newState;
      } else {
        return Object.assign({}, state, { [itemId]: item })
      }
    case REMOVE_CART_ITEM:
      delete newState.itemId;
      return newState;
    case CHECKOUT:
      newState.cart = {};
      return newState;
    default:
      return state;
  }
}

export default cartReducer;