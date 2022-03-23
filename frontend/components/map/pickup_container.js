import { connect } from 'react-redux';
import Pickup from "./pickup";
import { fetchRestaurant, fetchRestaurants } from '../../actions/restaurant_actions';

const mapStateToProps = (state) => {
  return {
    restaurants: Object.values(state.entities.restaurants)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    fetchRestaurant: restaurantId => dispatch(fetchRestaurant(restaurantId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pickup);