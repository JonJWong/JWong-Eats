import React from "react";
import { Link } from "react-router-dom";

function monthString(month) {
  switch (month) {
    case 0:
      return "Jan";
    case 1:
      return "Feb";
    case 2:
      return "Mar";
    case 3:
      return "Apr";
    case 4:
      return "May";
    case 5:
      return "Jun";
    case 6:
      return "Jul";
    case 7:
      return "Aug";
    case 8:
      return "Sep";
    case 9:
      return "Oct";
    case 10:
      return "Nov";
    case 11:
      return "Dec";
  }
}

class OrderHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }

    this.ifPhoto = this.ifPhoto.bind(this);
    this.renderOrders = this.renderOrders.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id)
      .then(() => this.props.fetchRestaurants())
      .then(() => this.setState({ loading: false }))
  }

  ifPhoto(restaurant) {
    if (restaurant.photoUrl) {
      return (
        <Link to={`/restaurants/${restaurant.id}`}>
          <div className="history-order-photo-wrapper">
            <img
              src={restaurant.photoUrl}
              alt={`${restaurant.name}-photo`}
              className="history-order-photo"/>
          </div>
        </Link>
      )
    }
  }

  renderOrders() {
    const { restaurants } = this.props;
    const { user } = this.props;
    
    if (user.transactions) {
      const transactions = Object.keys(user.transactions);
      return transactions.map(transId => {
        const currentTransaction = user.transactions[transId];
        const { items, total } = currentTransaction;
  
        const first = items[0].restaurant_id;
  
        let restName;
  
        const restaurant = restaurants[first];
  
        if (items.every(item => item.restaurant_id === first)) {
          restName = 
            `${restaurant.name} - ${restaurant.address}`;
        } else {
          restName = 
            `${restaurant.name} and others...`;
        }
        
        return (
          // randomly assigned keys, refactor
          <div className="history-order-container" key={Math.random() * total}>
            {this.ifPhoto(restaurant)}
            <div className="history-order-title-container">
              <div className="history-order-title">{restName}</div>
              <div className="history-order-subtitle">
                {items.length} Items for ${total} • {this.formattedDate(currentTransaction)} • 
                <div
                  className="history-view-receipt">
                    View Receipt
                </div>
              </div>
            </div>
            
            <div className="history-item-list">
              {items.map(item => {
                const currRest = restaurants[item.restaurant_id].name
                return (
                  <div className="history-item-wrapper" key={Math.random() * total}>
                    <div className="history-item-quantity">{item.item_quantity}</div>
                    <div className="history-item-title">
                      {item.item_name}
                        <div className="history-rest-name">
                          - {currRest}
                        </div>
                    </div>
                  </div>
                )
              })}
            </div>
  
            <div className="history-store-button">
              <Link
                to={`/restaurants/${first}`}
                className="history-store-button-text">
                View Store
              </Link>
            </div>
          </div>
        )
      })
    } else {
      return (
        <h3 id="no-orders">You do not have any past orders.</h3>
      )
    }
  }

  formattedDate(transaction) {
    const date = new Date(transaction.items[0].date)
    const month = monthString(date.getMonth());
    const day = date.getDate();
    const time = date.toLocaleTimeString('en-US');
    return `${month} ${day} at ${time}`
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <div className="loading-screen-bg">
          <div className="loading-element"></div>
        </div>
      )
    }

    return (
      <div className="history-body">
        <h2 className="history-header">Past Orders</h2>
        <div className="history-container">
          {this.renderOrders()}
        </div>
      </div>
    )
  }
}

export default OrderHistory;