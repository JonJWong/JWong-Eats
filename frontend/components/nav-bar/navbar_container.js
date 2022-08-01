import { connect } from "react-redux";
import { clearSessionErrors } from "../../actions/session_actions";
import { fetchRestaurants } from "../../actions/restaurant_actions";
import NavBar from './navbar';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    cart: state.entities.cart,
    restaurants: state.entities.restaurants
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    fetchRestaurants: category => dispatch(fetchRestaurants(category))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);