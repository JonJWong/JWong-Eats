import React from "react";
import CartItemContainer from "./cart_item_container";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.cart;
  }

  renderCartItems() {
    // Object.keys(this.state).map(itemId => {
    //   return (
    //     <CartItemComponent item={this.state.cart[itemId]}
    //   )
    // })
  }

  render() {
    const { addCartItem, updateCartItem, removeCartItem, checkout } = this.props;
    console.log(this.state);

    return (
      <div className="cart-modal">
        <div className="cart-modal-block"></div>
        <div className="cart-modal-content">
          <h3 className="cart-header">Your Cart</h3>

        </div>
      </div>
    )
  }
}

export default Cart;