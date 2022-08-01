import { connect } from "react-redux";
import UserModal from "./user_modal";
import { logout, login } from "../../actions/session_actions";

const mapStateToProps = ({entities, session}) => {
  return {
    currentUser: entities.users[session.id]
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    login: user => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserModal);