import React from "react";
import { Link } from "react-router-dom";
import UserAccountContainer from "../user_account/user_account_container";
import LoginFormContainer from "../session_form/login_form_container";
import SignUpFormContainer from "../session_form/signup_form_container";

class UserModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabOpen: false
    }

    this.toggleTab = this.toggleTab.bind(this);
    this.rendertab = this.renderTab.bind(this);
  }
  
  // helper method to toggle modal state
  toggleTab() {
    const setValue = !this.state.tabOpen;
    this.setState({ tabOpen: setValue });
  }

  // render modal if state is open
  renderTab() {
    if (this.state.tabOpen) {
      return <UserAccountContainer />
    }
  }

  // render login if state is open
  renderLogin() {
    if (this.state.loginOpen) {
      return <LoginFormContainer />
    }
  }

  render() {
    const open = this.state.tabOpen;
    const { currentUser, logout, login } = this.props;

    if (currentUser && !open) {
      return (
        <div id="user-modal">
          <div id="modal-contents">

            <div className="user-info">
              <span className="profile-photo" />
              <span className="profile-name">
                {currentUser.first_name}
              </span>

              <button 
                onClick={() => this.toggleTab()}
                id={open ? "close-account-button" :"view-account-button"}>
                  {open ? "Close" : "View Account"}
              </button>
            </div>

            {/* <Link className="orders-link">Orders</Link> */}

            <button
              onClick={() => logout()}
              id="modal-signout">
                Sign Out
            </button>
          </div>

          <div id="user-modal-block" onClick={() => this.props.toggleModal('modalOpen')} />
        </div>
      )
    } else if (currentUser && open) {
      return (
        <div id="user-modal">
          <div id="modal-contents">

            {this.renderTab()}

            <button
              onClick={() => this.toggleTab()}
              id={open ? "close-account-button" :"view-account-button"}>
                {open ? "Close" : "View Account"}
            </button>

            <button
              onClick={() => logout()}
              id="modal-signout">
                Sign Out
            </button>
          </div>

          <div id="user-modal-block"
            onClick={() => this.props.toggleModal('modalOpen')} />
        </div>
      )
    } else {
      return (
        <div id="splash-user-modal">
          <div id="splash-modal-contents">
            <Link to="/login">
              <div id="splash-modal-login">
                Sign In
              </div>
            </Link>

            <button
              onClick={()=>login({
                email: 'demo_user@email.com',
                password: 'password'
              })}
              id="splash-modal-demo">
                Demo Login
            </button>
          </div>

          <div id="splash-user-modal-block"
            onClick={() => this.props.toggleModal('modalOpen')} />
        </div>
      )
    }
  }
}

export default UserModal;