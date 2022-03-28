import React from "react";
import { Link } from "react-router-dom";
import UserAccountContainer from "../user_account/user_account_container";
import LoginFormContainer from "../session_form/login_form_container";
import OrderHistoryContainer from "../user_account/order_history_container";

class UserModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabOpen: false
    }

    this.closeAndRemove = this.closeAndRemove.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
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

  componentDidMount() {
    setTimeout(() => {
      this.toggleOpen();
    }, 10)
  }

  // helper method to add/remove transition effect class
  toggleOpen() {
    const modal = document.querySelector('.modal-contents');
    modal.classList.toggle('modal-open')
  }

  // helper method to trigger transition and "unmount" modal
  closeAndRemove() {
    const { toggleModal } = this.props;
    this.toggleOpen();
    setTimeout(() => {
      toggleModal("modalOpen");
    }, 510)
  }

  render() {
    const open = this.state.tabOpen;
    const { currentUser, logout, login } = this.props;

    if (currentUser && !open) {
      return (
        <div id="user-modal">
          <div className="modal-contents">

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

            <Link
              to={`/orderhistory/${currentUser.id}`}
              id="orders-link">
                <div
                  className="orders-link-container"
                  onClick={() => this.closeAndRemove()}>
                  <i className="fas fa-receipt"></i> Orders
                </div>
            </Link>

            <div id="modal-signout-container">
              <button
                onClick={() => logout()}
                id="modal-signout">
                  Sign Out
              </button>
            </div>
          </div>

          <div id="user-modal-block" 
            onClick={() => this.closeAndRemove()} />
        </div>
      )
    } else if (currentUser && open) {
      return (
        <div id="user-modal">
          <div className="modal-contents">

            {this.renderTab()}

            <button
              onClick={() => this.toggleTab()}
              id={open ? "close-account-button" :"view-account-button"}>
                {open ? "Close" : "View Account"}
            </button>

            <div id="modal-signout-container">
              <button
                onClick={() => logout()}
                id="modal-signout">
                  Sign Out
              </button>
            </div>
          </div>

          <div id="user-modal-block"
            onClick={() => this.closeAndRemove()} />
        </div>
      )
    } else {
      return (
        <div id="splash-user-modal">
          <div className="modal-contents">
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

          <div id="user-modal-block"
            onClick={() => this.closeAndRemove()} />
        </div>
      )
    }
  }
}

export default UserModal;