import { connect } from "react-redux";
import { clearSessionErrors } from "../../actions/session_actions";
import NavBar from './navbar';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    cart: state.entities.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearSessionErrors: () => dispatch(clearSessionErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);