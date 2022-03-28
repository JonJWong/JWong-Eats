import React from "react";
import * as Util from "../../util/util";

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
      addingItem: false
    }

    this.conditionalAddToCart = this.conditionalAddToCart.bind(this);
    this.conditionalModalClose = this.conditionalModalClose.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  // quantity button helpers
  increment() {
    const newQuant = this.state.quantity + 1;
    this.setState({ quantity: newQuant })
  }

  decrement() {
    if (this.state.quantity > 1) {
      const newQuant = this.state.quantity - 1;
      this.setState({ quantity: newQuant })
    }
  }

  // delay and change button when adding items to cart, and after
  // a short delay, report success and "unmount cart"
  addToCart(quantity, item) {
    const { addCartItem, toggleItemModal } = this.props;

    const left = document.querySelector("#food-modal-add-left");
    const button = document.querySelector("#food-modal-add-order");

    left.textContent = "Adding...";
    button.style.backgroundColor = "darkgrey";
    this.setState({ addingItem: true })

    setTimeout(() => {
      addCartItem(quantity, item);
      left.textContent = "Added!"

      // add save to local storage
      
      setTimeout(() => {
        toggleItemModal();
      }, 500)
    }, 800)
  }

  // helper to disallow spamming add button
  conditionalAddToCart(quantity, item) {
    if (!this.state.addingItem) {
      this.addToCart(quantity, item);
    }
  }

  // only allow onClick to close modal if things are not happening
  conditionalModalClose() {
    const { toggleItemModal } = this.props;
    if (!this.state.addingItem) {
      toggleItemModal();
    }
  }

  // render a different container for menu-item depending on whether or not
  // the item has a photo attached
  renderItem(item) {
    const { quantity } = this.state;
    if (item.photoUrl) {
      return (
        <div id="food-modal-content">

          <button
            id="food-modal-close"
            onClick={() => this.conditionalModalClose()}>
              <i className="fa-solid fa-x"></i>
          </button>

          <div id="food-modal-item">
            <img src={item.photoUrl}
              alt={`${item.item_name} image`}
              id="food-modal-image"
            />
            <div id="food-modal-name">{item.item_name}</div>
            <div id="food-modal-description">{item.description}</div>
            <div id="food-modal-addon">Add-On support coming soon!</div>
            <div id="food-modal-calorie-warning">
              2,000 calories a day is used for general nutrition advice, 
              but calorie needs vary. 
              Additional nutrition information available upon request.
            </div>
          </div>

          <div id="food-modal-controls">
            <div id="food-modal-quant-control">
              <button onClick={() => this.decrement()}
                className="food-modal-control-button">
                  <i className="fas fa-minus"></i>
              </button>
              <div id="food-modal-quantity">{quantity}</div>
              <button onClick={() => this.increment()}
                className="food-modal-control-button">
                  <i className="fas fa-plus"></i>
              </button>
            </div>

            <button
              id="food-modal-add-order"
              onClick={() => this.conditionalAddToCart(quantity, item)}>
              <div id="food-modal-add-left">
                Add {quantity} to order
              </div>
              <div id="food-modal-add-right">
                ${Util.priceMultiple(quantity, item.item_price).toFixed(2)}
              </div>
            </button>

          </div>
        </div>
      )
    } else {
      return (
        <div id="food-modal-content">

          <button
            id="food-modal-close"
            onClick={() => this.conditionalModalClose()}>
            <i className="fa-solid fa-x"></i>
          </button>

          <div id="food-modal-item">
            <div id="food-modal-name-nophoto">{item.item_name}</div>
            <div id="food-modal-description">{item.description}</div>
            <div id="food-modal-addon">Add-On support coming soon!</div>
            <div id="food-modal-calorie-warning">
              2,000 calories a day is used for general nutrition advice, 
              but calorie needs vary. 
              Additional nutrition information available upon request.
            </div>
          </div>

        <div id="food-modal-controls">
          <div id="food-modal-quant-control">
            <button onClick={() => this.decrement()}
              className="food-modal-control-button">
                <i className="fas fa-minus"></i>
            </button>
            <div id="food-modal-quantity">{quantity}</div>
            <button onClick={() => this.increment()}
              className="food-modal-control-button">
                <i className="fas fa-plus"></i>
            </button>
          </div>

          <button
            id="food-modal-add-order"
            onClick={() => this.conditionalAddToCart(quantity, item)}>
            <div id="food-modal-add-left">
              Add {quantity} to order
            </div>
            <div id="food-modal-add-right">
              ${Util.priceMultiple(quantity, item.item_price).toFixed(2)}
            </div>
          </button>

        </div>
      </div>
      )
    }
  }

  render() {
    const { item } = this.props;

    return (
      <div id="food-modal-container">
        <div id="food-modal-block"
          onClick={() => this.conditionalModalClose()}>
        </div>
        {this.renderItem(item)}
      </div>
    )
  }
}

export default MenuItem;