import { connect } from "react-redux";
import Cart from "./cart";
import { updateCartItem, removeCartItem, postTransaction } from "../../actions/cart_actions";

const mapStateToProps = (state) => {
  return {
    cart: state.entities.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCartItem: (quantity, item) => dispatch(updateCartItem(quantity, item)),
    removeCartItem: (quantity, item) => dispatch(removeCartItem(quantity, item)),
    checkout: cart => dispatch(postTransaction(cart))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)