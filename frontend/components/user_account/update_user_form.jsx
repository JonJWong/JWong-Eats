import React from "react";
import { Link } from "react-router-dom";

class UpdateUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.currentUser;
    this.state.password = "";

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.changeUserInfo(user)
  }

  renderErrors() {
    const { errors } = this.props;
    if (!errors) {
      return null;
    }
    return (
      <ul>
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
      return <div className="no-modify-default">You cannot modify the demo user.</div>
    } else {
      return(
        <div>
          {this.renderErrors()}
          <form onSubmit={this.handleSubmit}>
            <label>Email
              <input
                type='text'
                onChange={this.update("email")}
                value={this.state.email}
              />
            </label>
            <br/>
            <label>Password
              <input
                type='password'
                onChange={this.update("password")}
                value={this.state.password}
              />
            </label>
            <br/>
            <label>First Name
              <input
                type='text'
                onChange={this.update("first_name")}
                value={this.state.first_name}
              />
            </label>
            <br/>
            <label>Last Name
              <input
                type='text'
                onChange={this.update("last_name")}
                value={this.state.last_name}
              />
            </label>
            <br/>
            <label>Address
              <input
                type='text'
                onChange={this.update("address")}
                value={this.state.address}
              />
            </label>
            <br/>
            <input type="submit" value="Update Account" />
          </form>
        </div>
      )
    }
  }
}

export default UpdateUserForm;