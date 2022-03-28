import { connect } from "react-redux";
import SignUpForm from "./signup_form";
import { signup, clearSessionErrors, login } from "../../actions/session_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: "signup"
  }
};

const mapDispatchToProps = dispatch => {
  return {
    clearSessionErrors: () => dispatch(clearSessionErrors()),
    signup: user => dispatch(signup(user)),
    login: user => dispatch(login(user))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUpForm));