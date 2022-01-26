import React, { Component } from 'react';
import reactRouterDom, { Link } from 'react-router-dom';
import "./Login.scss";


class Login extends Component {
    render() {
        return (
            <div className="Login__wrap">
                <input className='Login__name' type="text" placeholder="User Name" />
                <input className='Login__password' type="password" placeholder="Password" />
              <Link to="/MainList">
                <button>Login</button>
                <button>Forgot Password?</button>
              </Link>

            </div>
        );
    }
}

export default Login;