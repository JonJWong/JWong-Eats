import { connect } from "react-redux";
import SignUpForm from "./signup_form";
import { signup, clearSessionErrors } from "../../actions/session_actions";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
    formType: "signup"
  }
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);