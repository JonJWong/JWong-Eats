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
      address: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // form handler methods
  handleSubmit(e) {
    e.preventDefault()
    const user = Object.assign({}, this.state);
    this.props.signup(user)
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value})
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
    const { login } = this.props;

    return(
      <div id="signup-form-container">
        <div id="signup-top-bar">
          <div className="eats-logo-white" />
        </div>

        <div id="signup-form-contents">
        {this.renderErrors()}
        
          <form onSubmit={this.handleSubmit}>
            <p className="signup-prompt">Email</p>
            <input 
              type="text" 
              onChange={this.update("email")}
              value={this.state.email}
              className="signup-input-field"
              placeholder="Enter email (required)"
            />

            <p className="signup-prompt">Password</p>
            <input 
              type="password" 
              onChange={this.update("password")}
              value={this.state.password}
              className="signup-input-field"
              placeholder="Enter password (required)"
            />

            <p className="signup-prompt">First Name</p>
            <input 
              type="text" 
              onChange={this.update("first_name")}
              value={this.state.first_name}
              className="signup-input-field"
              placeholder="Your first name (required)"
            />

            <p className="signup-prompt">Last Name</p>
            <input 
              type="text" 
              onChange={this.update("last_name")}
              value={this.state.last_name}
              className="signup-input-field"
              placeholder="Your last name (required)"
            />

            <p className="signup-prompt">Address</p>
            <input 
              type="text" 
              onChange={this.update("address")}
              value={this.state.address}
              className="signup-input-field"
              placeholder="Your address (required)"
            />

            <p id="login-legal">
              By proceeding, you DO NOT consent to get calls or SMS messages, 
              including by automated dialer, from JWongEats and its affiliates
              to this number. 
              Text “STOP” to 89203 to opt out.
            </p>

            <button
              id="signup-signup-button"
              type="submit">
                <i className="fas fa-sign-in"></i>Sign Up
            </button>
          </form>

          <p className="signup-text">Don't want to sign up?</p>

          <button
            onClick={()=>login({
              email: 'demo_user@email.com',
              password: 'password'
            })}
            id="signup-demo-button">
              <i className="fas fa-save fa-lg"></i> Demo Login
          </button>

          <Link
            to="/login"
            id="signup-login-button">
              Login <i className="fas fa-arrow-right fa-lg"></i>
          </Link>
        </div>
      </div>
    )
  }
}

export default SignUpForm;