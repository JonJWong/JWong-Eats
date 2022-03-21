import React from "react";
import { Link } from "react-router-dom";
import UserAccountContainer from "../user_account/user_account_container";

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

  render() {
    const open = this.state.tabOpen;
    const { currentUser, logout, login } = this.props;
    if (currentUser && !open) {
      return (
        <div className="user-modal">
          <span className="profile-photo"></span>
          <span>{currentUser.first_name}</span>
          <button onClick={() => this.toggleTab()}
          >{open ? "Close" : "View Account"}</button>
          <Link className="orders-link">Orders</Link>
          <Link onClick={() => logout()}>Sign Out</Link>
        </div>
      )
    } else if (currentUser && open) {
      return (
        <div className="user-modal">
          <button onClick={() => this.toggleTab()}
          >{open ? "Close" : "View Account"}</button>
          {this.renderTab()}
          <Link onClick={() => logout()}>Sign Out</Link>
        </div>
      )
    } else {
      return (
        <div className="user-modal">
          <Link to="/login" className="modal-login-button">Sign In</Link>
          <Link onClick={()=>login({
            email: 'demo_user@email.com',
            password: 'password'
          })} className="modal-login-button">Demo Login</Link>
        </div>
      )
    }
  }
}

export default UserModal;