import { connect } from "react-redux";
import LoginForm from "./login_form";
import { login, clearSessionErrors } from "../../actions/session_actions";

const mSTP = (state) => ({
  errors: state.errors.session,
  formType: "login"
});

const mDTP = dispatch => ({
  processForm: (user) => dispatch(login(user)),
  clearSessionErrors: () => dispatch(clearSessionErrors()),
})

export default connect(mSTP, mDTP)(LoginForm);