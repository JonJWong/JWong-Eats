import React from "react";
import CartItemContainer from "./cart_item_container";
import * as Util from "../../util/util";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      soon: false,
      processing: false,
      error: false
    }
    
    this.renderErrors = this.renderErrors.bind(this);
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
  // add a listener (on mount) that clears errors when component unmounts
  componentDidMount() {
    this.unlisten = this.props.history.listen(() => {
      this.props.clearCartErrors();
    })
    setTimeout(() => {
      this.toggleOpen();
    }, 10)
  }

  // clear errors when component unmounts
  componentWillUnmount() {
    this.unlisten();
  }

  // add class to open and close modal, and disable onClick to close while moving
  toggleOpen() {
    const cart = document.querySelector(".cart-modal-content");
    const button = document.querySelector(".menu-checkout-wrapper")
    
    cart.classList.toggle("cart-modal-open");
    button.classList.toggle("cart-modal-open");
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
      order: this.props.cart,
      userId: this.props.userId,
      total: this.priceSum()
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
        Util.saveState({ entities : {
          cart: {}
          }
        })

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
        this.setState({ error: false })
      }, 2000)
      return (
        <div className="auth-errors cart-error">
          Your cart was empty. Please add some items before checking out.
        </div>
      )
    }
  }

  renderErrors() {
    const { errors } = this.props;
    if (!errors) return null;

    return (
      <ul className="cart-errors">
        {errors.map((error, idx) => (
          <li key={idx}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  // method to adjust the price on checkout button to be an accurate
  // representation with two digits
  priceSum() {
    let sum = 0;
    
    let items;
    if (this.props.cart) {
      items = this.props.cart;
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
    if (!this.state.soon) {
      this.setState({ soon: true })
    }
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
    const that = this;
    setTimeout(() => {
      clearCart();
      Util.saveState({ entities: {
        cart: that.props.cart
        }
      });
      button.textContent = "Cleared!";
      this.setState({ processing: false })
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
        this.setState({ soon: false })
      }, 2000);
      return (
        <div className="auth-errors cart-error">
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
            {Object.values(this.props.cart).map((item, i) => {
              return (
                <CartItemContainer
                  item={item}
                  key={`${item.quantity}+${item.id}+${item.name}`}
                />
              )
            })}
          </div>

          <button
            id="cart-clear"
            onClick={() => this.conditionalDelayCartClear()}>
              Clear Cart
          </button>

            {this.renderErrors()}
            {this.emptyCartError()}
        </div>

          <div className="menu-checkout-wrapper">
            <div id="menu-checkout-container">
              <button id="menu-checkout"
                onClick={() => this.conditionalSendCheckout()}>
                  Go to checkout • ${this.priceSum()}
              </button>
            </div>
          </div>
      </div>
    )
  }
}

export default Cart;