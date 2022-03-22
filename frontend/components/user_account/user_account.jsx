import React from "react";
import { Link } from "react-router-dom";
import UpdateUserFormContainer from "./update_user_form_container";

class UserAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false
    }
    this.unToggle = this.unToggle.bind(this)
  }
  
  unToggle() {
    this.setState({ toggled: false })
  }

  render() {
    const { currentUser, logout } = this.props;
    if (this.state.toggled === true) {
      return(
        <div>
          <div className="user-info">
            <span className="profile-photo"></span>
            <span className="profile-name">{currentUser.first_name} {currentUser.last_name}</span>
            <button onClick={() => this.setState({ toggled: false })}
            >Cancel</button>
          </div>
            <UpdateUserFormContainer unToggle={this.unToggle} />
        </div>
      )
    } else {
      return (
        <div>
          <div className="user-info">
            <span className="profile-photo"></span>
            <span className="profile-name">{currentUser.first_name} {currentUser.last_name}</span>
            <button
              onClick={() => this.setState({ toggled: true })}
            >Edit Account</button>
          </div>
        </div>
      )
    }
  }
}

export default UserAccount;