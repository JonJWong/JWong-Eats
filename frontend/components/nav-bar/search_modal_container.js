import { connect } from "react-redux";
import SearchModal from "./search_modal";
import { fetchRestaurants, fetchRestaurant } from "../../actions/restaurant_actions";

const mapStateToProps = (state) => {
  return {
    restaurants: state.entities.restaurants
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRestaurants: () => dispatch(fetchRestaurants())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchModal);