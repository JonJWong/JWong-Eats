import React from "react";

class OrderHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id)
      .then(() => this.setState({ loading: false }))
  }

  ifPhoto(item) {
    if (item.photoUrl) {
      return (
        <img
          src={item.photoUrl}
          alt={item.item_name}
          className="history-photo"
        />
      )
    }
  }

  renderOrder(order) {
    return (
      <div className="history-item-container">
        {order.map(item => {
          const { item_name, item_price, item_quantity, item_id, date } = item;
          return (
            <div>test</div>
          )
        })}
      </div>
    
    )
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

    const { user } = this.props;
    const transactions = user.transactions;

    Object.keys(transactions).map(orderNumber => {
      const order = transactions[orderNumber].items;
      order.map(item => {
        console.log(item)
      })
    })

    return (
      <div className="history-container">
        <h2 className="history-header">Past Orders</h2>
      </div>
    )
  }
}

export default OrderHistory;