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
  
  toggleTab() {
    const setValue = !this.state.tabOpen;
    this.setState({ tabOpen: setValue });
  }

  renderTab() {
    if (this.state.tabOpen) {
      return <UserAccountContainer />
    }
  }

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
        <div className="user-modal">
          <div className="modal-contents">
            <div className="user-info">
              <span className="profile-photo"></span>
              <span className="profile-name">{currentUser.first_name}</span>
              <button 
                onClick={() => this.toggleTab()}
                className={open ? "close-account-button" :"view-account-button"}
              >{open ? "Close" : "View Account"}</button>
            </div>
            {/* <Link className="orders-link">Orders</Link> */}
            <button onClick={() => logout()} className="modal-signout">Sign Out</button>
          </div>
          <div className="user-modal-block" onClick={() => this.props.toggleModal()} />
        </div>
      )
    } else if (currentUser && open) {
      return (
        <div className="user-modal">
          <div className="modal-contents">
            {this.renderTab()}
            <button
              onClick={() => this.toggleTab()}
              className={open ? "close-account-button" :"view-account-button"}
              >{open ? "Close" : "View Account"}</button>
            <button onClick={() => logout()} className="modal-signout">Sign Out</button>
          </div>
          <div className="user-modal-block" onClick={() => this.props.toggleModal()} />
        </div>
      )
    } else {
      return (
        <div className="splash-user-modal">
          <div className="splash-modal-contents">
            <button to="/login" id="splash-modal-login">Sign In</button>
            <button onClick={()=>login({
              email: 'demo_user@email.com',
              password: 'password'
            })} className="splash-modal-demo">Demo Login</button>
          </div>
          <div className="splash-user-modal-block" onClick={() => this.props.toggleModal()} />
        </div>
      )
    }
  }
}

export default UserModal;