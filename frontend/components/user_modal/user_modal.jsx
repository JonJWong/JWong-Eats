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
        <div className="user-modal">
          <div className="modal-contents">
            <Link to="/login" className="modal-login-button">Sign In</Link>
            <button onClick={()=>login({
              email: 'demo_user@email.com',
              password: 'password'
            })} className="modal-login-button">Demo Login</button>
          </div>
          <div className="user-modal-block" onClick={() => this.props.toggleModal()} />
        </div>
      )
    }
  }
}

export default UserModal;