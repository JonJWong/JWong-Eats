import React from "react";
import UpdateUserFormContainer from "./update_user_form_container";

class UserAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
    };
    this.unToggle = this.unToggle.bind(this);
  }

  // Helper method to toggle modal open/close
  unToggle() {
    this.setState({ toggled: false });
  }

  // Either render order history or edit form
  render() {
    const { currentUser } = this.props;
    if (this.state.toggled === true) {
      return (
        <div>
          <div className="user-info">
            <span />
            <button
              className="cancel-button"
              onClick={() => this.setState({ toggled: false })}
            >
              Cancel
            </button>
          </div>
          <UpdateUserFormContainer unToggle={this.unToggle} />
        </div>
      );
    } else {
      return (
        <div>
          <div className="user-info">
            <span />
            <p>
              {currentUser.first_name} {currentUser.last_name}
            </p>
            <button
              className="profile-edit-button"
              onClick={() => this.setState({ toggled: true })}
            >
              Edit Account
            </button>
          </div>
        </div>
      );
    }
  }
}

export default UserAccount;
