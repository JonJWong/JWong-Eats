import { connect } from "react-redux";
import RestaurantIndex from "./restaurant_index";
import { fetchRestaurant } from "../../actions/restaurant_actions";

const mapStateToProps = ({ entities }, ownProps) => {
  return {
    restaurant: entities.restaurants[ownProps.match.params.restaurantId]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRestaurant: restaurantId => dispatch(fetchRestaurant(restaurantId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex)