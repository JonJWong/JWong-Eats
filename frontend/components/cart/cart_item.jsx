import React from "react";
import * as Util from "../../util/util";

import { connect } from "react-redux";
import { updateCartItem, removeCartItem } from "../../actions/cart_actions";

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
      selected: 0,
    };
  }

  // Helper method to create dropdown menu from 0-100, where 0 is "Remove"
  // also sets default value to current quantity of the item
  drawMenu() {
    const options = [];
    for (let i = 0; i < 100; i++) {
      options.push(i);
    }

    const selected = this.props.item.quantity;
    return (
      <select
        className="item-quant-dropdown"
        defaultValue={selected}
        onChange={(e) => this.handleChange(e)}
      >
        {options.map((option) => {
          return (
            <option key={option} value={option}>
              {option === 0 ? "Remove" : option}
            </option>
          );
        })}
      </select>
    );
  }

  // Helper method to change global cart state based on selection
  // it will either update or remove the item based on quantity selected
  handleChange(e) {
    const { removeCartItem, updateCartItem } = this.props;
    const { item } = this.state;
    const quantity = parseInt(e.target.value);

    if (e.target.value === "0") {
      removeCartItem(item.quantity, item);
    } else {
      updateCartItem(quantity, item);
    }
    Util.saveState({
      entities: {
        cart: this.props.cart,
      },
    });
  }

  render() {
    const item = this.state.item;

    return (
      <>
        {item.photoUrl ? (
          <div className="cart-item-container">
            {this.drawMenu()}

            <div className="cart-item-name">{item.item_name}</div>

            <div className="cart-item-price">
              ${parseFloat(item.item_price).toFixed(2)}
            </div>

            <img
              src={item.photoUrl}
              alt={`${item.item_name} image`}
              className="cart-item-photo"
            />
          </div>
        ) : (
          <div className="cart-item-container">
            {this.drawMenu()}

            <div className="cart-item-name">{item.item_name}</div>

            <div className="cart-item-price">
              ${parseFloat(item.item_price).toFixed(2)}
            </div>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.entities.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCartItem: (quantity, item) =>
      dispatch(updateCartItem(quantity, item)),
    removeCartItem: (quantity, item) =>
      dispatch(removeCartItem(quantity, item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
