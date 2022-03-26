import { connect } from "react-redux";
import Cart from "./cart";
import { withRouter } from "react-router-dom";
import { updateCartItem, removeCartItem, postTransaction, clearCart } from "../../actions/cart_actions";

const mapStateToProps = (state) => {
  return {
    cart: state.entities.cart,
    userId: state.session.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCartItem: (quantity, item) => dispatch(updateCartItem(quantity, item)),
    removeCartItem: (quantity, item) => dispatch(removeCartItem(quantity, item)),
    checkout: cart => dispatch(postTransaction(cart)),
    clearCart: () => dispatch(clearCart())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)