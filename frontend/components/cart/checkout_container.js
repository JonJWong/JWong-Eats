import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Checkout from "./checkout";
import { fetchUser } from "../../actions/user_actions";

const mapStateToProps = (state) => {
  return {
    user: Object.values(state.entities.users),
    restaurants: state.entities.restaurants
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Checkout));