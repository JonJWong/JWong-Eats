import { ADD_CART_ITEM, UPDATE_CART_ITEM, REMOVE_CART_ITEM, CLEAR_CART } from "../actions/cart_actions";

const cartReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  // define placeholder vars;
  let item;
  let itemId;

  // if action.item exists, set item, itemId, item.quantity
  if (action.item) {
    item = action.item;
    itemId = item.id;
    item.quantity ||= 0;
  };

  switch (action.type) {
    case ADD_CART_ITEM:
      // check if itemId key exists in cart (if this item is already in cart)
      if (!state[itemId]) {
        // if not, add it to cart and return
        item.quantity = action.quantity;
        return Object.assign({}, state, { [itemId]: item })
      } else {
        // otherwise increment the quantity and return
        newState[itemId].quantity += action.quantity;
        return Object.assign({}, state, newState)
      };
    case UPDATE_CART_ITEM:
      // update item quantity
      newState[itemId].quantity = action.quantity;
      // check if item quantity is valid, if below 0, delete key
      // otherwise return state with updated quantity
      if (newState[itemId].quantity <= 0) {
        delete newState.itemId;
      };
      return newState;
    case REMOVE_CART_ITEM:
      delete newState[itemId];
      return newState;
    case CLEAR_CART:
      return {};
    default:
      return state;
  };
};

export default cartReducer;