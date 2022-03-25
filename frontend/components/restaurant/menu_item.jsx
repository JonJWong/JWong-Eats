import React from "react";
import * as Util from "../../util/util";

class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    }
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

  renderItem(item) {
    if (item.photoUrl) {
      return (
        <div id="food-modal-content">

          <button id="food-modal-close">x</button>

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
                  -
              </button>
              <div id="food-modal-quantity">{this.state.quantity}</div>
              <button onClick={() => this.increment()}
                className="food-modal-control-button">
                  +
              </button>
            </div>

            <button id="food-modal-add-order">
              <div id="food-modal-add-left">
                Add {this.state.quantity} to order
              </div>
              <div id="food-modal-add-right">
                ${Util.priceMultiple(this.state.quantity, item.item_price)}
              </div>
            </button>

          </div>
        </div>
      )
    } else {
      return (
        <div id="food-modal-content">

          <button id="food-modal-close">x</button>

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
                -
            </button>
            <div id="food-modal-quantity">{this.state.quantity}</div>
            <button onClick={() => this.increment()}
              className="food-modal-control-button">
                +
            </button>
          </div>

          <button id="food-modal-add-order">
            <div id="food-modal-add-left">
              Add {this.state.quantity} to order
            </div>
            <div id="food-modal-add-right">
              ${Util.priceMultiple(this.state.quantity, item.item_price)}
            </div>
          </button>

        </div>
      </div>
      )
    }
  }

  render() {
    const { item, toggleItemModal } = this.props;

    return (
      <div id="food-modal-container">
        <div id="food-modal-block" onClick={() => toggleItemModal()}></div>
        {this.renderItem(item)}
      </div>
    )
  }
}

export default MenuItem;