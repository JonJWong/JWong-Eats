import React from "react";
import * as Util from "../../util/util";

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      addingItem: false,
    };

    this.conditionalAddToCart = this.conditionalAddToCart.bind(this);
    this.conditionalModalClose = this.conditionalModalClose.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  // Quantity button helpers
  increment() {
    const newQuant = this.state.quantity + 1;
    this.setState({ quantity: newQuant });
  }

  decrement() {
    if (this.state.quantity > 1) {
      const newQuant = this.state.quantity - 1;
      this.setState({ quantity: newQuant });
    }
  }

  // Delay and change button when adding items to cart, and after
  // a short delay, report success and "unmount cart"
  addToCart(quantity, item) {
    const { addCartItem, toggleItemModal } = this.props;

    const left = document.querySelector("#add-left");
    const button = document.querySelector("#food-modal-add-order");

    left.textContent = "Adding...";
    button.style.backgroundColor = "darkgrey";
    this.setState({ addingItem: true });

    const that = this;

    setTimeout(() => {
      addCartItem(quantity, item);
      left.textContent = "Added!";

      Util.saveState({
        entities: {
          cart: that.props.cart,
        },
      });
      setTimeout(() => {
        toggleItemModal();
      }, 500);
    }, 800);
  }

  // Helper to disallow spamming add button
  conditionalAddToCart(quantity, item) {
    if (!this.state.addingItem) {
      this.addToCart(quantity, item);
    }
  }

  // Only allow onClick to close modal if things are not happening
  conditionalModalClose() {
    const { toggleItemModal } = this.props;
    if (!this.state.addingItem) {
      toggleItemModal();
    }
  }

  // Render a different container for menu-item depending on whether or not
  // the item has a photo attached
  renderItem(item) {
    const { quantity } = this.state;
    if (item.photoUrl) {
      return (
        <div className="food-modal-content">
          <button onClick={() => this.conditionalModalClose()}>
            <i className="fa-solid fa-x"></i>
          </button>

          <div className="food-modal-item">
            <img src={item.photoUrl} alt={`${item.item_name} image`} />
            <h3>{item.item_name}</h3>
            <p>{item.description}</p>
            <h4>Add-On support coming soon!</h4>
            <footer>
              2,000 calories a day is used for general nutrition advice, but
              calorie needs vary. Additional nutrition information available
              upon request.
            </footer>
          </div>

          <footer>
            <section>
              <button onClick={() => this.decrement()}>
                <i className="fas fa-minus"></i>
              </button>
              <p>{quantity}</p>
              <button onClick={() => this.increment()}>
                <i className="fas fa-plus"></i>
              </button>
            </section>

            <button onClick={() => this.conditionalAddToCart(quantity, item)}>
              <div className="add-left">Add {quantity} to order</div>
              <div className="add-right">
                ${Util.priceMultiple(quantity, item.item_price)}
              </div>
            </button>
          </footer>
        </div>
      );
    } else {
      return (
        <div className="food-modal-content">
          <button
            id="food-modal-close"
            onClick={() => this.conditionalModalClose()}
          >
            <i className="fa-solid fa-x"></i>
          </button>

          <div className="food-modal-item">
            <h2>{item.item_name}</h2>
            <p>{item.description}</p>
            <h4>Add-On support coming soon!</h4>
            <footer>
              2,000 calories a day is used for general nutrition advice, but
              calorie needs vary. Additional nutrition information available
              upon request.
            </footer>
          </div>

          <footer>
            <section>
              <button onClick={() => this.decrement()}>
                <i className="fas fa-minus"></i>
              </button>
              <p>{quantity}</p>
              <button onClick={() => this.increment()}>
                <i className="fas fa-plus"></i>
              </button>
            </section>

            <button onClick={() => this.conditionalAddToCart(quantity, item)}>
              <div className="add-left">Add {quantity} to order</div>
              <div className="add-right">
                ${Util.priceMultiple(quantity, item.item_price)}
              </div>
            </button>
          </footer>
        </div>
      );
    }
  }

  render() {
    const { item } = this.props;

    return (
      <section className="food-modal">
        <div
          className="food-modal-block"
          onClick={() => this.conditionalModalClose()}
        />
        {this.renderItem(item)}
      </section>
    );
  }
}

export default MenuItem;
