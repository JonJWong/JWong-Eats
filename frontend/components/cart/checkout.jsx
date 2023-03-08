import React from "react";
import CheckoutMap from "./checkout_map";

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
      <div className="checkout-order-container">
        <section>
          <header>Your Order from {restName}</header>

          <ul>
            {Object.values(items).map((item) => {
              return (
                <li key={item.item_name + item.item_quantity}>
                  <p>{item.item_quantity}</p>
                  <h2>{item.item_name}</h2>
                  <h3>{restaurants[item.restaurant_id].name}</h3>
                  <span>${parseFloat(item.item_price).toFixed(2)}</span>
                </li>
              );
            })}
          </ul>

          <h2>Your Total: ${parseFloat(total).toFixed(2)}</h2>

          <footer>
            Thank you for shopping JWongEats!
            <p>
              No temporary holds were placed on any payment methods. This site
              does not take any forms of payment.
            </p>
          </footer>
        </section>
        <CheckoutMap />
      </div>
    );
  }
}

export default Checkout;
