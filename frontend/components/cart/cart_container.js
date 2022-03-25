import { connect } from "react-redux";
import Cart from "./cart";
import { receiveCartItem, updateCartItem, removeCartItem, checkout } from "../../actions/cart_actions";

const mapStateToProps = (state) => {
  return {
    cart: state.entities.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    receiveCartItem: (quantity, item) => dispatch(receiveCartItem(quantity, item)),
    updateCartItem: (quantity, item) => dispatch(updateCartItem(quantity, item)),
    removeCartItem: (quantity, item) => dispatch(removeCartItem(quantity, item)),
    checkout: cart => dispatch(checkout(cart))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)