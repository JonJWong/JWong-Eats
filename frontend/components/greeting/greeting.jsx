import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const {currentUser, logout, login} = this.props;

    if (currentUser) {
      return (
        <div className="greeting">
          <span>{`Welcome, ${currentUser.first_name}`}</span>
          <Link to="/" onClick={()=>logout()}>Logout</Link>
        </div>
      )
    } else {
      return (
        <div className="greeting">
          <Link to="/signup">Sign up</Link>
          <Link to="/login">Login</Link>
          <button onClick={()=>login({
            email: 'demo_user@email.com',
            password: 'password'
          })}
          className="demo-login-button">Demo Login</button>
        </div>
      )
    }
  }
}

export default Greeting;