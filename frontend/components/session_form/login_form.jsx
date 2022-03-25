import React from "react";
import { Link } from "react-router-dom";

class LoginForm extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // form handler methods
  handleSubmit(e) {
    e.preventDefault()
    const user = Object.assign({}, this.state);
    this.props.login(user)
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  // error display helper
  renderErrors() {
    const {errors} = this.props
    if(!errors) return null;
    return(
      <ul className="auth-errors">
        {errors.map((error,idx) => (
          <li key={idx}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  // add a listener (on mount) that clears errors when component unmounts
  componentDidMount() {
    this.unlisten = this.props.history.listen(() => {
      this.props.clearSessionErrors();
    });
  }

  // clear errors when component unmounts
  componentWillUnmount() {
    this.unlisten();
  }

  render() {
    const { formType, login } = this.props;
    const signup = (formType === 'signup');

    return(
      <div id="login-form-container">
        <div id="login-top-bar">
          <div className="eats-logo-white" />
        </div>

        <div id="login-form-contents">
          {this.renderErrors()}

          <form onSubmit={this.handleSubmit}>
            <h1 className="login-prompt">Email</h1>
            <input 
              type="text" 
              onChange={this.update("email")}
              value={this.state.email}
              className="login-input-field"
              placeholder="Enter email"
            />

            <h1 className="login-prompt">Password</h1>
            <input 
              type="password" 
              onChange={this.update("password")}
              value={this.state.password}
              className="login-input-field"
              placeholder="Enter password"
            />

            <button type="submit" id="login-login-button">
              Login <i className="fas fa-arrow-right fa-lg"></i>
            </button>
          </form>

          <p className="login-text">Don't have an account with us?</p>

          <button
            onClick={()=>login({
              email: 'demo_user@email.com',
              password: 'password'
            })}
            id="login-demo-button">
              <i className="fas fa-save fa-lg"></i> Demo Login
          </button>

          <Link
            to={signup ? "/login" : "/signup"}
            id="login-signup-button">
              <i className="fas fa-sign-in"></i>
              {signup ? "Log in" : "Sign up"}
          </Link>
        </div>
      </div>
    )
  }
}

export default LoginForm;
