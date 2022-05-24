import React from "react";
import CheckoutMap from "./checkout_map";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchUser } from "../../actions/user_actions";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
    this.map;
    this.id = parseInt(props.match.params.id);
  }

  componentDidMount() {
    const that = this;
    this.props.fetchUser(this.props.user[0].id).then((action) => {
      that.setState({
        user: action.user,
        transaction: action.user.transactions[that.id],
        loading: false,
      });
    });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading</div>;
    }

    const { total, items } = this.state.transaction;
    const first = items[0].restaurant_id;
    const restaurants = this.props.restaurants;
    const restaurant = this.props.restaurants[first];

    let restName;

    restName = items.every((item) => item.restaurant_id === first)
      ? `${restaurant.name} - ${restaurant.address}`
      : `${restaurant.name} and others...`;

    return (
      <div id="checkout-order-container">
        <div id="checkout-order-content">
          <div id="checkout-order-title">Your Order from {restName}</div>

          <div id="checkout-order-list-container">
            {Object.values(items).map((item) => {
              return (
                <div
                  className="checkout-order-item-container"
                  key={item.item_name + item.item_quantity}
                >
                  <div className="checkout-order-item-quantity">
                    {item.item_quantity}
                  </div>
                  <div className="checkout-order-item-name">
                    {item.item_name}
                  </div>
                  <div className="checkout-order-item-restaurant">
                    {restaurants[item.restaurant_id].name}
                  </div>
                  <div className="checkout-order-item-price">
                    ${parseFloat(item.item_price).toFixed(2)}
                  </div>
                </div>
              );
            })}
          </div>

          <div id="checkout-order-total">
            Your Total: ${parseFloat(total).toFixed(2)}
          </div>
          <div id="checkout-order-footer">
            Thank you for shopping JWongEats!
            <div id="checkout-order-footer-sub">
              No temporary holds were placed on any payment methods. This site
              does not take any forms of payment.
            </div>
          </div>
        </div>
        <CheckoutMap />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: Object.values(state.entities.users),
    restaurants: state.entities.restaurants,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId)),
  };
};

export default connect(withRouter(mapStateToProps, mapDispatchToProps))(
  Checkout
);
