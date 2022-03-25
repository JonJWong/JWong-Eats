import { connect } from "react-redux";
import CartItem from "./cart_item";
import { updateCartItem, removeCartItem } from "../../actions/cart_actions";

const mapStateToProps = (state) => {
  return {
    cart: state.entities.cart
  }
}

const mapDispatchToProps = (state) => {
  return {
    updateCartItem: (quantity, item) => dispatch(updateCartItem(quantity, item)),
    removeCartItem: (quantity, item) => dispatch(removeCartItem(quantity, item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);