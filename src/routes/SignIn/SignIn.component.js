import React, { useState, useEffect } from "react";
import  { Redirect } from 'react-router-dom'
import './SignIn.scss';

const SignIn = (props) => {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onUserSignIn({username: username, password: password})
    }

    if (!props.token.fail) {
        return <Redirect to='/'  />
    }

    return (
        <div className="login-container">
        <div className="form-box">
          <div className="header-form">
            <h4 className="text-center"><i className="fas fa-paw" style={{fontSize:"110px"}}></i></h4>
            <div className="image">
            </div>
          </div>
          <div className="body-form">
           <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                </div>
                <input  type="text" 
                        className="form-control" 
                        onChange={(e) => setUsername(e.target.value)} 
                        placeholder="Username" />
            </div>
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text"><i class="fa fa-lock"></i></span>
                </div>
                <input  type="password" 
                        className="form-control" 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Password" />
            </div>
                <button type="submit" className="btn btn-secondary btn-block" >Sign In</button>
            <div className="message">
                <div><input type="checkbox"/> Remember me</div>
            </div>
            </form>
          </div>
        </div>
       </div>   
    );
}

export default SignIn;