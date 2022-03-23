import { connect } from "react-redux";
import { clearSessionErrors } from "../../actions/session_actions";
import Main from './main';

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearSessionErrors: () => dispatch(clearSessionErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);