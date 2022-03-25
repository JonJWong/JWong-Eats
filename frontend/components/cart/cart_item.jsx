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
      <select className="item-quant-dropdown">
        {options.map(option => {
          if (option === this.props.item.quantity) {
            return (
              <option key={option} value={option} selected>
                {option === 0 ? "Remove" : option}
              </option>
            )
          } else {
            return (
              <option key={option} value={option}>
                {option === 0 ? "Remove" : option}
              </option>
            )
          }
        })}
      </select>
    )
  }

  render() {
    const { updateCartItem, removeCartItem } = this.props;
    const item = this.state;
    return (
      <div className="cart-item-container">
        {this.drawMenu()}
        <div className="cart-item-name">
          {item.item_name}
        </div>
        <div className="cart-item-price">
          {item.price}
        </div>
        <div className="cart-item-photo">
          
        </div>
      </div>
    )
  }
}

export default CartItem;