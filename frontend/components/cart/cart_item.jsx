import React from "react";
import * as Util from "../../util/util";

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.item;
  }

  drawOption(i, quantity) {
    if (i === quantity) {
      return (<option value={i} key={i} selected />)
    } else {
      return (<option value={i} key={i} />)
    }
  }

  drawMenu() {
    const quantity = this.state.quantity;
    for (let i = 1; i < 100; i++) {
      this.drawOption(i, quantity)
    }
  }

  render() {
    const { updateCartItem, removeCartItem } = this.props;

    return (
      <div className="cart-item-container">
        <select className="item-quant-dropdown">
          {this.drawMenu()}
        </select>
      </div>
    )
  }
}

export default CartItem;