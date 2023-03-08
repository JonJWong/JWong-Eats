import React from "react";
import { Link } from "react-router-dom";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      address: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Form handler methods
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  // Error display helper
  renderErrors() {
    const { errors } = this.props;
    if (!errors) return null;
    return (
      <ul className="auth-errors">
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
    );
  }

  // Add a listener (on mount) that clears errors when component unmounts
  componentDidMount() {
    this.unlisten = this.props.history.listen(() => {
      this.props.clearSessionErrors();
    });
  }

  // Clear errors when component unmounts
  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    const { login } = this.props;

    return (
      <div className="session-form signup">
        <div className="session-top">
          <div className="eats-logo-white" />
        </div>

        <section>
          {this.renderErrors()}

          <form onSubmit={this.handleSubmit}>
            <p className="session-prompt">Email</p>
            <input
              type="text"
              onChange={this.update("email")}
              value={this.state.email}
              placeholder="Enter email (required)"
            />

            <p className="session-prompt">Password</p>
            <input
              type="password"
              onChange={this.update("password")}
              value={this.state.password}
              placeholder="Enter password (required)"
            />

            <p className="session-prompt">First Name</p>
            <input
              type="text"
              onChange={this.update("first_name")}
              value={this.state.first_name}
              placeholder="Your first name (required)"
            />

            <p className="session-prompt">Last Name</p>
            <input
              type="text"
              onChange={this.update("last_name")}
              value={this.state.last_name}
              placeholder="Your last name (required)"
            />

            <p className="session-prompt">Address</p>
            <input
              type="text"
              onChange={this.update("address")}
              value={this.state.address}
              placeholder="Your address (required)"
            />

            <footer>
              By proceeding, you DO NOT consent to get calls or SMS messages,
              including by automated dialer, from JWongEats and its affiliates
              since we do not accept phone numbers. You do not need to text to
              opt out.
            </footer>

            <button className="session-button" type="submit">
              <i className="fas fa-sign-in"></i>Sign Up
            </button>
          </form>

          <p className="session-text">Don't want to sign up?</p>

          <button
            onClick={() =>
              login({
                email: "demo_user@email.com",
                password: "password",
              })
            }
            className="session-button demo-button"
          >
            <i className="fas fa-save fa-lg"></i> Demo Login
          </button>

          <Link to="/login" className="session-button">
            Login <i className="fas fa-arrow-right fa-lg"></i>
          </Link>
        </section>
      </div>
    );
  }
}

export default SignUpForm;
