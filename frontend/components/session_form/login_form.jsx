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

  //CONTROLLED INPUT FORM METHODS
  handleSubmit(e){
    e.preventDefault()
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
  }

  update(field){
    return e => this.setState({[field]: e.currentTarget.value})
  }

  //DISPLAY ERROR MESSAGES
  renderErrors(){
    const {errors} = this.props
    if(!errors) return null;
    return(
      <ul>
        {errors.map((error,idx) => (
          <li key={idx}>
            {error}
          </li>
        ))}
      </ul>
    )
  }

  // LIFECYCLE METHODS
  componentDidMount(){
    this.unlisten = this.props.history.listen(() => {
      this.props.clearSessionErrors();
    });
  }

  componentWillUnmount() {
    this.unlisten();
  }  

  render(){
    const {formType} = this.props;
    const signup = (formType === 'signup');

    return(
      <div>
        <header>
          <h2>Log In</h2>
          <Link to={signup ? "/login" : "/signup"}>{signup ? "Log in" : "Sign up"}</Link>
        </header>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <label>Email
            <input 
              type="text" 
              onChange={this.update("email")}
              value={this.state.email}
            />
          </label>
          <br/>
          <label>Password
            <input 
              type="password" 
              onChange={this.update("password")}
              value={this.state.password}
            />
          </label>
          <br/>
          <input type="submit" value={'Log In'}/>
        </form>
      </div>
    )
  }
}

export default LoginForm;