import React from 'react';
import { postData } from '../../apis';
import './signup.css';

/**
 * @description:Sign Up Form
 * @author:Dhivya.C
 */
class SignUpForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    }

  };
/**
 * Input elements change event
 * @param {*} e 
 */
  handleChange = (e) => {

    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
    this.validateForm()

  }
/**
 * Submit the Sign up Form
 * @param {*} e 
 */
  submituserRegistrationForm = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      const URL = `/users`;
      let {username,emailid,mobileno,password}=this.state.fields
      let obj={username,emailid,mobileno,password}
      postData(URL, obj)
        .then(res => {
          this.setState({ fields: res.data });
        })
        .catch(error => {
          console.log(error);
        });

      let fields = {};
      fields["username"] = "";
      fields["emailid"] = "";
      fields["mobileno"] = "";
      fields["password"] = "";
      fields["confirmpassword"] = "";
      this.setState({ fields: fields });
      alert("User Registered");
    }

  }
/**
 * 
 * @returns true/false
 */
  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*Please enter your user.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*Please enter alphabet characters only.";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }
    if (!fields["confirmpassword"]) {
      formIsValid = false;
      errors["confirmpassword"] = "*Please enter your password.";
    }

    if (typeof fields["confirmpassword"] !== "undefined") {
      if (!fields["confirmpassword"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["confirmpassword"] = "*Please enter secure and strong password.";
      }
    }
    if (typeof fields["confirmpassword"] !== typeof fields["password"]) {
      formIsValid = false;
      errors["confirmpassword"] = "*Please enter same password.";
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }
  render() {
    return (
      <div id="main-registration-container">
        <div id="register">
          <h3>Sign Up</h3>
          <form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >
            <label>Name</label>
            <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.username}</div>
            <label>Email ID:</label>
            <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.emailid}</div>
            <label>Password:</label>
            <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.password}</div>
            <label>Confirm Password:</label>
            <input type="password" name="confirmpassword" value={this.state.fields.confirmpassword} onChange={this.handleChange} />
            <div className="errorMsg">{this.state.errors.confirmpassword}</div>

            <input type="submit" className="button" value="Register" />
          </form>
        </div>
      </div>

    );
  }


}


export default SignUpForm;