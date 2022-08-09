import React from "react";
import CartItemContainer from "./cart_item_container";
import * as Util from "../../util/util";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      soon: false,
      processing: false,
      error: false,
    };

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

  // Make opening async so the slide transition works.
  // Add a listener (on mount) that clears errors when component unmounts
  componentDidMount() {
    this.unlisten = this.props.history.listen(() => {
      this.props.clearCartErrors();
    });
    setTimeout(() => {
      this.toggleOpen();
    }, 10);
  }

  // Clear errors when component unmounts
  componentWillUnmount() {
    this.unlisten();
  }

  // Add class to open and close modal, and disable onClick to close while moving
  toggleOpen() {
    const cart = document.querySelector(".cart-modal-content");
    const button = document.querySelector(".menu-checkout-wrapper");

    cart.classList.toggle("cart-modal-open");
    button.classList.toggle("cart-modal-open");
    this.setState({ processing: true });
    setTimeout(() => {
      this.setState({ processing: false });
    }, 500);
  }

  // Only allow onClick if things are not processing
  conditionalToggle() {
    if (!this.state.processing) {
      this.closeAndRemove();
    }
  }

  // Trigger close animation for cart and "unmount" component
  closeAndRemove() {
    const { toggleCart } = this.props;
    this.toggleOpen();
    setTimeout(() => {
      toggleCart("cartOpen");
    }, 510);
  }

  // Change checkout button contents to show that things are moving
  // and after a time, tell user whether or not checkout was successful
  sendCheckout() {
    const { checkout, cart } = this.props;
    const push = this.props.history.push;
    let id;
    // Set up transaction object to send to backend
    let transaction = {
      order: this.props.cart,
      userId: this.props.userId,
      total: this.priceSum(),
    };

    // Set button content, and state to disallow modal close onClick
    const button = document.querySelector("#menu-checkout");
    button.textContent = "Processing...";
    this.setState({ processing: true });

    // Delay reporting to user so they can read what is going on
    setTimeout(() => {
      // If the cart is not empty, tell the user checkout was successful, and
      // then close + "unmount" the cart after another short delay.
      if (Object.keys(cart).length > 0) {
        button.textContent = "Checked out!";
        checkout(transaction).then((res) => {
          id = res.id.id;
        });

        Util.saveState({
          entities: {
            cart: {},
          },
        });

        setTimeout(() => {
          this.closeAndRemove();
          push(`/checkout/${id}`);
        }, 200);
      } else {
        // If the cart was empty, reset button contents, set state to show error
        button.textContent = `Go to checkout • ${this.priceSum()}`;
        this.setState({
          error: true,
          processing: false,
        });
      }
    }, 800);
  }

  // Helper to disallow spam on checkout button
  conditionalSendCheckout() {
    if (!this.state.processing) {
      this.sendCheckout();
    }
  }

  // Method to display a cart error, and after a short delay, remove the error
  // and reset error flag in state
  emptyCartError() {
    if (this.state.error) {
      setTimeout(() => {
        this.setState({ error: false });
      }, 2000);
      return (
        <p className="auth-errors">
          Your cart was empty. Please add some items before checking out.
        </p>
      );
    }
  }

  renderErrors() {
    const { errors } = this.props;
    if (!errors) return null;

    return (
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
    );
  }

  // Method to adjust the price on checkout button to be an accurate
  // representation with two digits
  priceSum() {
    let sum = 0;

    let items;
    if (this.props.cart) {
      items = this.props.cart;
      Object.values(items).forEach((item) => {
        sum += Util.priceMultiple(item.quantity, item.item_price);
      });
    }
    if (sum === 0) {
      return "0.00";
    } else {
      return parseFloat(sum).toFixed(2);
    }
  }

  // Helper method to toggle error state
  comingSoon() {
    if (!this.state.soon) {
      this.setState({ soon: true });
    }
  }

  // Method to clear the cart after displaying a message that it is clearing
  delayCartClear() {
    // Set state and button contents
    const { clearCart } = this.props;
    const button = document.querySelector(".cart-clear");
    button.textContent = "Clearing...";
    this.setState({ processing: true });

    // After short delay, clear cartm report that cart is cleared, and
    // after another short delay, close and "unmount cart"
    const that = this;
    setTimeout(() => {
      clearCart();
      Util.saveState({
        entities: {
          cart: that.props.cart,
        },
      });
      button.textContent = "Cleared!";
      this.setState({ processing: false });
    }, 500);
  }

  // Helper to disallow spamming of cart clear button
  conditionalDelayCartClear() {
    if (!this.state.processing) {
      this.delayCartClear();
    }
  }

  // Render error and self-destruct after a small delay
  renderSoon() {
    if (this.state.soon) {
      setTimeout(() => {
        this.setState({ soon: false });
      }, 2000);
      return (
        <p className="auth-errors">
          Group ordering is not available yet! Sorry for the inconvenience.
        </p>
      );
    }
  }

  render() {
    return (
      <aside className="cart-modal">
        <section
          className="cart-modal-block"
          onClick={() => this.conditionalToggle()}
        />

        <section className="cart-modal-content">
          <button
            className="cart-close"
            onClick={() => this.conditionalToggle()}
          >
            <i className="fa-solid fa-x fa-lg"></i>
          </button>

          <header>
            <h2>Your Cart</h2>

            <h3>Deliver to Union, NJ</h3>

            <div>
              <button onClick={() => this.conditionalToggle()}>
                <i className="fas fa-plus"></i> Add Items
              </button>

              <button onClick={() => this.comingSoon()}>
                <i className="fas fa-user-plus"></i> Group Order
              </button>
            </div>
          </header>

          {this.renderSoon()}
          <ul className="cart-items">
            {Object.values(this.props.cart).map((item, i) => {
              return (
                <CartItemContainer
                  item={item}
                  key={`${item.quantity}+${item.id}+${item.name}`}
                />
              );
            })}
          </ul>

          <button
            className="cart-clear"
            onClick={() => this.conditionalDelayCartClear()}
          >
            Clear Cart
          </button>

          {this.renderErrors()}
          {this.emptyCartError()}
        </section>

        <section className="menu-checkout-wrapper">
          <div>
            <button
              id="menu-checkout"
              onClick={() => this.conditionalSendCheckout()}
            >
              Go to checkout • ${this.priceSum()}
            </button>
          </div>
        </section>
      </aside>
    );
  }
}

export default Cart;
