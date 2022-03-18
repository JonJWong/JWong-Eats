import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Greeting from "./greeting"

const mSTP = ({entities, session}) => ({
  currentUser: entities.users[session.id],
});

const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(mSTP, mDTP)(Greeting);