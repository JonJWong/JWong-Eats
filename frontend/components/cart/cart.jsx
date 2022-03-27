import React from "react";
import CartItemContainer from "./cart_item_container";
import * as Util from "../../util/util";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: this.props.cart,
      soon: false,
      processing: false,
      error: false
    }
    
    this.conditionalDelayCartClear = this.conditionalDelayCartClear.bind(this);
    this.conditionalSendCheckout = this.conditionalSendCheckout.bind(this);
    this.emptyCartError = this.emptyCartError.bind(this);
    this.conditionalToggle = this.conditionalToggle.bind(this);
    this.delayCartClear = this.delayCartClear.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.closeAndRemove = this.closeAndRemove.bind(this);
    this.priceSum = this.priceSum.bind(this);
  }

  // make opening async so the slide transition works
  componentDidMount() {
    setTimeout(() => {
      this.toggleOpen();
    }, 10)
  }

  // add class to open and close modal, and disable onClick to close while moving
  toggleOpen() {
    const cart = document.querySelector(".cart-modal-content");
    cart.classList.toggle("cart-modal-open");
    this.setState({ processing: true })
    setTimeout(() => {
      this.setState({ processing: false })
    }, 500)
  }

  // only allow onClick if things are not processing
  conditionalToggle() {
    if (!this.state.processing) {
      this.closeAndRemove()
    }
  }

  // trigger close animation for cart and "unmount" component
  closeAndRemove() {
    const { toggleCart } = this.props;
    this.toggleOpen();
    setTimeout(() => {
      toggleCart("cartOpen");
    }, 510)
  }

  // change checkout button contents to show that things are moving
  // and after a time, tell user whether or not checkout was successful
  sendCheckout() {
    const { checkout, cart } = this.props;
    // set up transaction object to send to backend
    let transaction = {
      order: this.state.cart,
      userId: this.props.userId
    }

    // set button content, and state to disallow modal close onClick
    const button = document.querySelector("#menu-checkout");
    button.textContent = ("Processing...");
    this.setState({ processing: true })

    // delay reporting to user so they can read what is going on
    setTimeout(() => {
      // if the cart is not empty, tell the user checkout was successful, and
      // then close + "unmount" the cart after another short delay.
      if (Object.keys(cart).length > 0) {
        button.textContent = ("Checked out!")
        checkout(transaction)

        setTimeout(() => {
          this.closeAndRemove();
        }, 200)
      } else {
        // if the cart was empty, reset button contents, set state to show error
        button.textContent = `Go to checkout • ${this.priceSum()}`
        this.setState({ 
          error: true,
          processing: false
        })
      }
    }, 800)
  }

  // helper to disallow spam on checkout button
  conditionalSendCheckout() {
    if (!this.state.processing) {
      this.sendCheckout()
    }
  }

  // method to display a cart error, and after a short delay, remove the error
  // and reset error flag in state
  emptyCartError() {
    if (this.state.error) {
      setTimeout(() => {
        const error = document.querySelector(".cart-error-2");
        error.parentElement.removeChild(error);
        this.setState({ error: false })
      }, 3000);
      return (
        <div className="auth-errors cart-error cart-error-2">
          Your cart was empty. Please add some items before checking out.
        </div>
      )
    }
  }

  // method to adjust the price on checkout button to be an accurate
  // representation with two digits
  priceSum() {
    let sum = 0;
    
    let items;
    if (this.state.cart) {
      items = this.state.cart;
        Object.values(items).forEach(item => {
          sum += Util.priceMultiple(item.quantity, item.item_price)
        }
      )
    }
    if (sum === 0) {
      return "0.00"
    } else {
      return sum.toFixed(2)
    }
  }

  // helper method to toggle error state
  comingSoon() {
    const nextValue = !this.state.soon;
    this.setState({ soon: nextValue })
  }

  // method to clear the cart after displaying a message that it is clearing
  delayCartClear() {
    // set state and button contents
    const { clearCart } = this.props;
    const button = document.querySelector("#cart-clear");
    button.textContent = "Clearing...";
    this.setState({ processing: true });

    // after short delay, clear cartm report that cart is cleared, and
    // after another short delay, close and "unmount cart"
    setTimeout(() => {
      clearCart();
      button.textContent = "Cleared!";

      setTimeout(() => {
        this.closeAndRemove();
      }, 200)
    }, 500)
  }

  // helper to disallow spamming of cart clear button
  conditionalDelayCartClear() {
    if (!this.state.processing) {
      this.delayCartClear();
    }
  }

  // render error and self-destruct after a small delay
  renderSoon() {
    if (this.state.soon) {
      setTimeout(() => {
        const error = document.querySelector(".cart-error-1");
        error.parentElement.removeChild(error);
      }, 3000);
      return (
        <div className="auth-errors cart-error cart-error-1">
          Group ordering is not available yet! Sorry for the inconvenience.
        </div>
      )
    }
  }

  render() {
    return (
      <div id="cart-modal">
        <div
          id="cart-modal-block"
          onClick={() => this.conditionalToggle()} />

        <div className="cart-modal-content">
          <button
            id="cart-close"
            onClick={() => this.conditionalToggle()}>
              <i className="fa-solid fa-x fa-lg"></i>
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
                onClick={() => this.conditionalToggle()}>
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
            {Object.values(this.state.cart).map((item, i) => {
              return (
                <CartItemContainer
                  item={item}
                  key={i}
                  closeAndRemove={this.closeAndRemove}
                />
              )
            })}
          </div>

          <button
            id="cart-clear"
            onClick={() => this.conditionalDelayCartClear()}>
              Clear Cart
          </button>

            {this.emptyCartError()}
          <div id="menu-checkout-wrapper">
            <div id="menu-checkout-container">
              <button id="menu-checkout"
                onClick={() => this.conditionalSendCheckout()}>
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