import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import OrderHistory from "./order_history";
import { fetchUser } from "../../actions/user_actions";

const mapStateToProps = (state) => {
  return {
    user: state.entities.users[state.session.id],
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: userId => dispatch(fetchUser(userId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderHistory));