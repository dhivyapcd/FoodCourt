import React, { useState } from 'react';
import { getData } from "../../apis";
import './login.css';
import Auth from '../../Auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {addUser} from '../../redux/actions/authActions'
/**
 * Description:Login Form
 * Author:Dhivya.C
 * @param {*} props  
 */
const LoginForm = (props) => {
    const history=useNavigate ();
    const [state, setState] = useState({
        username: '',
        password: ''
      });
   
    let dispatcher=useDispatch();
    const handleInputChange = (event) => {
        const { name, value } = event.target;
    
        setState({
          ...state,
          [name]: value
        });
      };
    /**
     * Form Submit event for Login
     * @param {*} event 
     */
    const handleSubmitevents = (event) => {        
        event.preventDefault();
        const { username, password } = state;
        const URL = `/users`;
        if (username == '') alert("Enter User Name")
        else if (password == '') alert("Enter Password")
        else {
            getData(URL)
                .then(res => {
                    let { data } = res;

                    let validUser = data.filter((user) => user.username === username && user.password === password)
                    console.log(validUser.length)
                    if (validUser.length === 1) {
//Auth.authenticate();
                        let user=username;                    
                        dispatcher(addUser(user))
                        history('/home')
                    }
                    else {
                       // Auth.signout();
                        alert("Login Failure");
                    }
                })

                .catch(error => {
                    console.log(error);
                });
        }

    }
    return (        
        <div className="login-block">
            <h1>Logining In....</h1>
            <hr />
            <form onSubmit={handleSubmitevents}>
                <label><i className="fa fa-user" ></i>User Name</label>
                <input type="text" placeholder="Username" name="username" onChange={handleInputChange} />
                <label ><i className="fa fa-key"></i>Password</label>
                <input type="password" placeholder="Password" name="password" onChange={handleInputChange} />
                <button>Sign In</button>
            </form>
        </div>

    )

}
export default LoginForm