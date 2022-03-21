import { connect } from "react-redux";
import UserAccount from "./user_account";
import { logout } from "../../actions/session_actions";

const mapStateToProps = ({entities, session, errors}) => {
  return {
    currentUser: entities.users[session.id],
    errors: errors.session
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAccount);