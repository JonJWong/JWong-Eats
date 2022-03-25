import React from "react";
import { Link } from "react-router-dom";

class UpdateUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
    this.state.password = "";

    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.changeUserInfo(user).then(() => this.props.unToggle())
  }

  renderErrors() {
    const { errors } = this.props;
    if (!errors) {
      return null;
    }
    return (
      <ul className="auth-errors">
        {errors.map((error, idx) => {
          return <li key={ idx }>
            {error}
          </li>
        })}
      </ul>
    )
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  render() {
    if (this.state.id === 1) {
      return <div className="auth-errors">You cannot modify the demo user.</div>
    } else {
      return(
        <div id="update-form-container">
          {this.renderErrors()}
          <form onSubmit={this.handleSubmit}>
            <div className="edit-form-text">Email</div>
              <input
                className="edit-form-input"
                type='text'
                onChange={this.update("email")}
                value={this.state.email}
              />
            <div className="edit-form-text">Password</div>
              <input
                className="edit-form-input"
                type='password'
                onChange={this.update("password")}
                value={this.state.password}
              />
            <div className="edit-form-text">First Name</div>
              <input
                className="edit-form-input"
                type='text'
                onChange={this.update("first_name")}
                value={this.state.first_name}
              />
            <div className="edit-form-text">Last Name</div>
              <input
                className="edit-form-input"
                type='text'
                onChange={this.update("last_name")}
                value={this.state.last_name}
              />
            <div className="edit-form-text">Address</div>
              <input
                className="edit-form-input"
                type='text'
                onChange={this.update("address")}
                value={this.state.address}
              />
            <input
              type="submit"
              value="Update Account"
              id="edit-form-submit" />
          </form>
        </div>
      )
    }
  }
}

export default UpdateUserForm;