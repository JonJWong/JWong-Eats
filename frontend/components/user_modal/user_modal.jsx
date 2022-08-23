import React from "react";
import { Link } from "react-router-dom";
import UserAccountContainer from "../user_account/user_account_container";

class UserModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabOpen: false,
    };

    this.closeAndRemove = this.closeAndRemove.bind(this);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.toggleTab = this.toggleTab.bind(this);
  }

  // Helper method to toggle modal state
  toggleTab() {
    const setValue = !this.state.tabOpen;
    this.setState({ tabOpen: setValue });
  }

  componentDidMount() {
    setTimeout(() => {
      this.toggleOpen();
    }, 10);
  }

  // Helper method to add/remove transition effect class
  toggleOpen() {
    const modal = document.querySelector(".modal-contents");
    modal.classList.toggle("modal-open");
  }

  // Helper method to trigger transition and "unmount" modal
  closeAndRemove() {
    const { toggleModal } = this.props;
    this.toggleOpen();
    setTimeout(() => {
      toggleModal("modalOpen");
    }, 510);
  }

  render() {
    const open = this.state.tabOpen;
    const { currentUser, logout, login } = this.props;

    if (currentUser && !open) {
      return (
        <div className="user-modal">
          <section className="modal-contents">
            <header className="user-info">
              <span className="profile-photo" />
              <p>{currentUser.first_name}</p>

              <button
                onClick={() => this.toggleTab()}
                className={open ? "close-button" : "view-button"}
              >
                {open ? "Close" : "View Account"}
              </button>
            </header>

            <Link to={`/orderhistory/${currentUser.id}`}>
              <div onClick={() => this.closeAndRemove()}>
                <i className="fas fa-receipt"></i> Orders
              </div>
            </Link>

            <footer>
              <button onClick={() => logout()}>Sign Out</button>
            </footer>
          </section>

          <div
            className="user-modal-block"
            onClick={() => this.closeAndRemove()}
          />
        </div>
      );
    } else if (currentUser && open) {
      return (
        <div className="user-modal">
          <section className="modal-contents">
            {this.state.tabOpen && <UserAccountContainer />}

            <button
              onClick={() => this.toggleTab()}
              className={open ? "close-button" : "view-button"}
            >
              {open ? "Close" : "View Account"}
            </button>

            <footer>
              <button onClick={() => logout()}>Sign Out</button>
            </footer>
          </section>

          <div
            className="user-modal-block"
            onClick={() => this.closeAndRemove()}
          />
        </div>
      );
    } else {
      return (
        <div className="splash-user-modal">
          <div className="modal-contents">
            <Link className="splash-link" to="/login">
              Sign In
            </Link>

            <button
              onClick={() =>
                login({
                  email: "demo_user@email.com",
                  password: "password",
                })
              }
              className="splash-link"
            >
              Demo Login
            </button>
          </div>

          <div
            className="user-modal-block"
            onClick={() => this.closeAndRemove()}
          />
        </div>
      );
    }
  }
}

export default UserModal;
