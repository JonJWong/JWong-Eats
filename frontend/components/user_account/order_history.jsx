import React from "react";
import { Link } from "react-router-dom";

const MONTH_TO_STR = {
  0: "Jan",
  1: "Feb",
  2: "Mar",
  3: "Apr",
  4: "May",
  5: "Jun",
  6: "Jul",
  7: "Aug",
  8: "Sep",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};

class OrderHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      receiptOpen: false,
      currentTransaction: null,
      restName: null,
    };

    this.toggleReceipt = this.toggleReceipt.bind(this);
    this.renderReceipt = this.renderReceipt.bind(this);
    this.ifPhoto = this.ifPhoto.bind(this);
    this.renderOrders = this.renderOrders.bind(this);
  }

  // Get User, Restaurants, on component mount.
  componentDidMount() {
    this.props
      .fetchUser(this.props.match.params.id)
      .then(() => this.props.fetchRestaurants())
      .then(() => this.setState({ loading: false }));
  }

  // Only render an image with a link if the restaurant has a photo attached.
  ifPhoto(restaurant) {
    if (restaurant.photoUrl) {
      return (
        <Link to={`/restaurants/${restaurant.id}`}>
          <div>
            <img src={restaurant.photoUrl} alt={`${restaurant.name}-photo`} />
          </div>
        </Link>
      );
    }
  }

  // Helper to open and close the receipt modal.
  toggleReceipt(currentTransaction = null, restName = null) {
    const nextState = !this.state.receiptOpen;

    this.setState({
      receiptOpen: nextState,
      currentTransaction: currentTransaction,
      restName: restName,
    });
  }

  // random key, refactor eventually
  renderReceipt() {
    if (this.state.receiptOpen) {
      const { total, items } = this.state.currentTransaction;
      const { restName } = this.state;

      return (
        <section>
          <article>
            <header>
              <button onClick={() => this.toggleReceipt()}>
                <i className="fa-solid fa-x fa-lg"></i>
              </button>
              <h3>Receipt from:</h3>
              <p>{restName}</p>
            </header>

            <section>
              <p>Total</p>
              <p>$ {parseFloat(total).toFixed(2)}</p>
            </section>

            <ul>
              {Object.values(items).map((item) => {
                return (
                  <li key={Math.random()}>
                    <p>{item.item_quantity}</p>
                    <h3>{item.item_name}</h3>
                    <div className="receipt-item-subtitle">
                      {this.props.restaurants[item.restaurant_id].name}
                    </div>
                    <div className="receipt-item-price">
                      $ {parseFloat(item.item_price).toFixed(2)}
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="receipt-payment">
              <p className="receipt-total">Subtotal:</p>
              <p id="receipt-price">$ {parseFloat(total).toFixed(2)}</p>
            </div>

            <div className="receipt-footer">
              Thank you for shopping JWongEats!
            </div>

            <footer>
              No temporary holds were placed on any payment methods. This site
              does not take any forms of payment.
            </footer>
          </article>
          <div
            className="receipt-modal-block"
            onClick={() => this.toggleReceipt()}
          />
        </section>
      );
    }
  }

  renderOrders() {
    const { restaurants } = this.props;
    const { user } = this.props;

    // Only render if the user has transactions
    if (user.transactions) {
      const transactions = Object.keys(user.transactions).reverse();
      return transactions.map((transId) => {
        const currentTransaction = user.transactions[transId];
        const { items, total } = currentTransaction;

        const first = items[0].restaurant_id;

        let restName;

        const restaurant = restaurants[first];

        if (items.every((item) => item.restaurant_id === first)) {
          restName = `${restaurant.name} - ${restaurant.address}`;
        } else {
          restName = `${restaurant.name} and others...`;
        }

        return (
          // Randomly assigned keys, refactor evenutally
          <li key={Math.random() * total}>
            {this.ifPhoto(restaurant)}
            <header>
              <h2>{restName}</h2>
              <p>
                {items.length > 1
                  ? items.length + " Items" + " "
                  : items.length + " Item" + " "}
                for $ {parseFloat(total).toFixed(2)} •
                {this.formattedDate(currentTransaction)} •
                <button
                  onClick={() =>
                    this.toggleReceipt(currentTransaction, restName)
                  }
                >
                  View Receipt
                </button>
              </p>
            </header>

            <ul>
              {items.map((item) => {
                const currRest = restaurants[item.restaurant_id].name;
                return (
                  <li key={Math.random() * total}>
                    <p>{item.item_quantity}</p>
                    <h3>
                      {item.item_name}
                      <span>- {currRest}</span>
                    </h3>
                  </li>
                );
              })}
            </ul>

            <Link to={`/restaurants/${first}`} className="store-link">
              View Store
            </Link>
          </li>
        );
      });
    } else {
      return <li className="no-orders">You do not have any past orders.</li>;
    }
  }

  // Helper to format the date to be user-friendly.
  formattedDate(transaction) {
    const date = new Date(transaction.items[0].date);
    const month = MONTH_TO_STR[date.getMonth()];
    const day = date.getDate();
    const time = date.toLocaleTimeString("en-US");
    return `${month} ${day} at ${time}`;
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <div className="loading-screen-bg">
          <div className="loading-element"></div>
        </div>
      );
    }

    return (
      <div className="history-body">
        <h2>Past Orders</h2>
        <ul className="order-list">{this.renderOrders()}</ul>
        {this.renderReceipt()}
      </div>
    );
  }
}

export default OrderHistory;
