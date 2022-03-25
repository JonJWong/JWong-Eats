import React from "react";
import CartItemContainer from "./cart_item_container";
import * as Util from "../../util/util";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: this.props.cart,
      soon: false
    }
    
    this.priceSum = this.priceSum.bind(this);
  }

  priceSum() {
    let sum = 0;

    let items;
    if (!this.state.cart === {}) {
      items = this.state.cart;
      for (let item of items) {
        sum += Util.priceMultiple(item.quantity, item.price)
      }
    }
    if (sum === 0) sum = "0.00"
    return sum;
  }

  comingSoon() {
    const nextValue = !this.state.soon;
    this.setState({ soon: nextValue })
  }

  renderSoon() {
    if (this.state.soon) {
      return (
        <div className="auth-errors">
          Group ordering is not available yet! Sorry for the inconvenience.
        </div>
      )
    }
  }

  render() {
    const { checkout, toggleCart } = this.props;

    return (
      <div id="cart-modal">
        <div id="cart-modal-block"></div>

        <div id="cart-modal-content">
          <button
            id="cart-close"
            onClick={() => toggleCart()}>
              <i class="fa-solid fa-x fa-lg"></i>
          </button>

          <div id="cart-header">
            <div id="cart-title">
              Your Cart
            </div>

            <div id="cart-address">
              Deliver to Union, NJ
            </div>

            <div id="cart-top-buttons">
              <button 
                id="cart-add-items"
                onClick={() => toggleCart()}>
                  <i className="fas fa-plus"></i> Add Items
              </button>

              <button
                id="cart-group-order"
                onClick={() => this.comingSoon()}>
                  <i className="fas fa-user-plus"></i> Group Order
              </button>
            </div>
          </div>

          {this.renderSoon()}

          <div id="cart-items">
            {Object.values(this.state).map((item, i) => {
              return (
                <CartItemContainer item={item} key={i} />
              )
            })}
          </div>

          <div id="menu-checkout-wrapper">
            <div id="menu-checkout-container">
              <button id="menu-checkout"
                onClick={() => checkout(this.state)}>
                  Go to checkout • ${this.priceSum()}
              </button>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Cart;