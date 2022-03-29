import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import OrderHistory from "./order_history";
import { fetchUser } from "../../actions/user_actions";
import { fetchRestaurants } from "../../actions/restaurant_actions";

const mapStateToProps = (state) => {
  return {
    user: state.entities.users[state.session.id],
    restaurants: state.entities.restaurants
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId)),
    fetchRestaurants: category => dispatch(fetchRestaurants(category))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderHistory));