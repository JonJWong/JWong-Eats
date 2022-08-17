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
          <div className="history-order-photo-wrapper">
            <img
              src={restaurant.photoUrl}
              alt={`${restaurant.name}-photo`}
              className="history-order-photo"
            />
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
        <div id="receipt-modal-container">
          <div id="receipt-modal-contents">
            <div id="receipt-modal-header">
              <button
                id="receipt-modal-close"
                onClick={() => this.toggleReceipt()}
              >
                <i className="fa-solid fa-x fa-lg"></i>
              </button>
              <div id="receipt-modal-title">Receipt from:</div>
              <div id="receipt-modal-restname">{restName}</div>
            </div>

            <div id="receipt-modal-price-row">
              <div>Total</div>
              <div>$ {parseFloat(total).toFixed(2)}</div>
            </div>

            <div id="receipt-item-wrapper">
              {Object.values(items).map((item) => {
                return (
                  <div className="receipt-item-container" key={Math.random()}>
                    <div className="receipt-item-quantity">
                      {item.item_quantity}
                    </div>
                    <div className="receipt-item-name">{item.item_name}</div>
                    <div className="receipt-item-subtitle">
                      {this.props.restaurants[item.restaurant_id].name}
                    </div>
                    <div className="receipt-item-price">
                      $ {parseFloat(item.item_price).toFixed(2)}
                    </div>
                  </div>
                );
              })}
            </div>

            <div id="receipt-payment-container">
              <div id="receipt-bottom-total">Subtotal:</div>
              <div id="receipt-payment-price">
                $ {parseFloat(total).toFixed(2)}
              </div>
            </div>

            <div id="receipt-footer">Thank you for shopping JWongEats!</div>

            <div id="receipt-payment-subtitle">
              No temporary holds were placed on any payment methods. This site
              does not take any forms of payment.
            </div>
          </div>
          <div
            id="receipt-modal-block"
            onClick={() => this.toggleReceipt()}
          ></div>
        </div>
      );
    }
  }

  renderOrders() {
    const { restaurants } = this.props;
    const { user } = this.props;

    // Only render if the user has transactions
    if (user.transactions) {
      const transactions = Object.keys(user.transactions);
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
          <div className="history-order-container" key={Math.random() * total}>
            {this.ifPhoto(restaurant)}
            <div className="history-order-title-container">
              <div className="history-order-title">{restName}</div>
              <div className="history-order-subtitle">
                {items.length} Items for $ {parseFloat(total).toFixed(2)} •{" "}
                {this.formattedDate(currentTransaction)} •
                <button
                  onClick={() =>
                    this.toggleReceipt(currentTransaction, restName)
                  }
                  className="history-view-receipt"
                >
                  View Receipt
                </button>
              </div>
            </div>

            <div className="history-item-list">
              {items.map((item) => {
                const currRest = restaurants[item.restaurant_id].name;
                return (
                  <div
                    className="history-item-wrapper"
                    key={Math.random() * total}
                  >
                    <div className="history-item-quantity">
                      {item.item_quantity}
                    </div>
                    <div className="history-item-title">
                      {item.item_name}
                      <div className="history-rest-name">- {currRest}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link to={`/restaurants/${first}`} className="history-store-button">
              <div className="history-store-button-text">View Store</div>
            </Link>
          </div>
        );
      });
    } else {
      return <h3 id="no-orders">You do not have any past orders.</h3>;
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
        <h2 className="history-header">Past Orders</h2>
        <div className="history-container">{this.renderOrders()}</div>
        {this.renderReceipt()}
      </div>
    );
  }
}

export default OrderHistory;
