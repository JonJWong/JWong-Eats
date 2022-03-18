import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component{
  constructor(props){
    super(props)
  }

  render(){
    const {currentUser, logout} = this.props;

    if (currentUser) {
      return (
        <nav>
          <span>{`Welcome, ${currentUser.first_name}`}</span>
          <button onClick={()=>logout()}>Logout</button>
        </nav>
      )
    } else {
      return (
        <nav>
          <Link to="/signup">Sign up</Link>
          <Link to="/login">Login</Link>
        </nav>
      )
    }
  }
}

export default Greeting;