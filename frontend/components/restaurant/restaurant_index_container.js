import { connect } from "react-redux";
import RestaurantIndex from "./restaurant_index";
import { fetchRestaurant } from "../../actions/restaurant_actions";
import { addCartItem } from "../../actions/cart_actions";

const mapStateToProps = ({ entities }, ownProps) => {
  return {
    restaurant: entities.restaurants[ownProps.match.params.restaurantId]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRestaurant: restaurantId => dispatch(fetchRestaurant(restaurantId)),
    addCartItem: (quantity, item) => dispatch(addCartItem(quantity, item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantIndex)