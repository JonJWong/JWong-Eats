import { connect } from "react-redux";
import UpdateUserForm from "./update_user_form";
import { changeUserInfo } from "../../actions/user_actions";
import { clearSessionErrors } from "../../actions/session_actions";
import { withRouter } from "react-router-dom";

const mapStateToProps = ({entities, session, errors}) => {
  return {
    currentUser: entities.users[session.id],
    errors: errors.session
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeUserInfo: user => dispatch(changeUserInfo(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UpdateUserForm));