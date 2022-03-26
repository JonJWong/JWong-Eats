import React from "react";
import * as Util from "../../util/util";

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.item;
  }

  drawMenu() {
    const options = [];
    for (let i = 0; i < 100; i++) {
      options.push(i)
    }
    return (
      <select
        className="item-quant-dropdown"
        defaultValue={this.props.item.quantity}>
        {options.map(option => {
          return (
            <option key={option} value={option}>
              {option === 0 ? "Remove" : option}
            </option>
          )
        })}
      </select>
    )
  }

  drawContainer(item) {
    if (item.photoUrl) {
      return (
        <div className="cart-item-container">
        {this.drawMenu()}

        <div className="cart-item-name">
          {item.item_name}
        </div>

        <div className="cart-item-price">
          ${item.item_price}
        </div>

        <img src={item.photoUrl}
              alt={`${item.item_name} image`}
              className="cart-item-photo"
            />
      </div>
      )
    } else {
      return (
        <div className="cart-item-container">
        {this.drawMenu()}

        <div className="cart-item-name">
          {item.item_name}
        </div>

        <div className="cart-item-price">
          ${item.item_price}
        </div>
      </div>
      )
    }
  }

  render() {
    const { updateCartItem, removeCartItem } = this.props;
    const item = this.state;
    
    return (
      <div className="cart-item-container-wrapper">
        {this.drawContainer(item)}
      </div>
    )
  }
}

export default CartItem;