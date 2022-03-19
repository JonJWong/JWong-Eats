import { connect } from "react-redux";
import { logout, login } from "../../actions/session_actions";
import Greeting from "./greeting"

const mapStateToProps = ({entities, session}) => {
  return {
    currentUser: entities.users[session.id],
  }
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    login: user => dispatch(login(user))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);