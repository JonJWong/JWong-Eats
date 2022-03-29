import { connect } from 'react-redux';
import Delivery from "./delivery";
import { fetchRestaurant, fetchRestaurants } from '../../actions/restaurant_actions';

const mapStateToProps = (state) => {
  return {
    restaurants: state.entities.restaurants
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRestaurants: category => dispatch(fetchRestaurants(category)),
    fetchRestaurant: restaurantId => dispatch(fetchRestaurant(restaurantId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Delivery);