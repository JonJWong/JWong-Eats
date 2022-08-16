import React from "react";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Form handler methods
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
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
    const { formType, login } = this.props;
    const signup = formType === "signup";

    return (
      <div className="session-form login">
        <div className="session-top">
          <div className="eats-logo-white" />
        </div>

        <section>
          {this.renderErrors()}

          <form onSubmit={this.handleSubmit}>
            <h1 className="session-prompt">Email</h1>
            <input
              type="text"
              onChange={this.update("email")}
              value={this.state.email}
              placeholder="Enter email"
            />

            <h1 className="session-prompt">Password</h1>
            <input
              type="password"
              onChange={this.update("password")}
              value={this.state.password}
              placeholder="Enter password"
            />

            <button type="submit" className="session-button">
              Login <i className="fas fa-arrow-right fa-lg"></i>
            </button>
          </form>

          <p className="session-text">Don't have an account with us?</p>

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

          <Link to={signup ? "/login" : "/signup"} className="session-button">
            <i className="fas fa-sign-in"></i>
            {signup ? "Log in" : "Sign up"}
          </Link>
        </section>
      </div>
    );
  }
}

export default LoginForm;
